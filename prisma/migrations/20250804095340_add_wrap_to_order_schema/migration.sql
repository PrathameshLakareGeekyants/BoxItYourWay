-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "wrapId" TEXT;

-- AlterTable
ALTER TABLE "OrderTag" ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Wrap" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Wrap_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_wrapId_fkey" FOREIGN KEY ("wrapId") REFERENCES "Wrap"("id") ON DELETE SET NULL ON UPDATE CASCADE;
