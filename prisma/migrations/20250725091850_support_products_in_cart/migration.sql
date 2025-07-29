/*
  Warnings:

  - A unique constraint covering the columns `[cartId,comboId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cartId,productId]` on the table `CartItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_comboId_fkey";

-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "productId" TEXT,
ALTER COLUMN "comboId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_comboId_key" ON "CartItem"("cartId", "comboId");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_productId_key" ON "CartItem"("cartId", "productId");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_comboId_fkey" FOREIGN KEY ("comboId") REFERENCES "Combo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
