/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `OrderTag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Wrap` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OrderTag_name_key" ON "OrderTag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Wrap_name_key" ON "Wrap"("name");
