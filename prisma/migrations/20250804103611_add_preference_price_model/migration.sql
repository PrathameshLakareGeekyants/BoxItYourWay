/*
  Warnings:

  - You are about to drop the column `preference` on the `Order` table. All the data in the column will be lost.
  - Added the required column `preferenceId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `wrapId` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_wrapId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "preference",
ADD COLUMN     "preferenceId" TEXT NOT NULL,
ALTER COLUMN "wrapId" SET NOT NULL;

-- CreateTable
CREATE TABLE "PreferencePrice" (
    "id" TEXT NOT NULL,
    "preference" "Preference" NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "PreferencePrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_wrapId_fkey" FOREIGN KEY ("wrapId") REFERENCES "Wrap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_preferenceId_fkey" FOREIGN KEY ("preferenceId") REFERENCES "PreferencePrice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
