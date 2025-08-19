/*
  Warnings:

  - A unique constraint covering the columns `[preference]` on the table `PreferencePrice` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PreferencePrice_preference_key" ON "PreferencePrice"("preference");
