/*
  Warnings:

  - Added the required column `orderTagId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preference` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Preference" AS ENUM ('BAG', 'BOX');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderTagId" TEXT NOT NULL,
ADD COLUMN     "preference" "Preference" NOT NULL;

-- CreateTable
CREATE TABLE "OrderTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrderTag" ADD CONSTRAINT "OrderTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderTagId_fkey" FOREIGN KEY ("orderTagId") REFERENCES "OrderTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
