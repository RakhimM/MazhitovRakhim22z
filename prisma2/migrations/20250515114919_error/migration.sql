/*
  Warnings:

  - You are about to drop the column `description` on the `SupportTicket` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `SupportTicket` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `SupportTicket` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('Read', 'Sent');

-- AlterTable
ALTER TABLE "SupportTicket" DROP COLUMN "description",
DROP COLUMN "status",
DROP COLUMN "subject";

-- AlterTable
ALTER TABLE "SupportTicketMessage" ADD COLUMN     "statusMessage" "MessageStatus" NOT NULL DEFAULT 'Sent';

-- DropEnum
DROP TYPE "TicketStatus";
