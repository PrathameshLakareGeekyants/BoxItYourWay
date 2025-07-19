-- DropForeignKey
ALTER TABLE "ComboItem" DROP CONSTRAINT "ComboItem_comboId_fkey";

-- AddForeignKey
ALTER TABLE "ComboItem" ADD CONSTRAINT "ComboItem_comboId_fkey" FOREIGN KEY ("comboId") REFERENCES "Combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
