/*
  Warnings:

  - Added the required column `imageUrl` to the `Wrap` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wrap" ADD COLUMN     "imageUrl" TEXT NOT NULL;
