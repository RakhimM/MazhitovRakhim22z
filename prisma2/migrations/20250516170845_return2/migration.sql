/*
  Warnings:

  - Added the required column `quantity` to the `Return` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Return" ADD COLUMN     "quantity" INTEGER NOT NULL;
