-- DropForeignKey
ALTER TABLE "Assortment" DROP CONSTRAINT "Assortment_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Hookah" DROP CONSTRAINT "Hookah_mainCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_mainCategoryId_fkey";

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_mainCategoryId_fkey" FOREIGN KEY ("mainCategoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assortment" ADD CONSTRAINT "Assortment_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hookah" ADD CONSTRAINT "Hookah_mainCategoryId_fkey" FOREIGN KEY ("mainCategoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
