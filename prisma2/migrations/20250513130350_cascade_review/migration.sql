-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_parentId_fkey";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;
