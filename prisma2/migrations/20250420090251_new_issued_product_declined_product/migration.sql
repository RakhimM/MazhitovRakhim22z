/*
  Warnings:

  - You are about to drop the `SupportTicket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SupportTicketMessage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SupportTicket" DROP CONSTRAINT "SupportTicket_userId_fkey";

-- DropForeignKey
ALTER TABLE "SupportTicketMessage" DROP CONSTRAINT "SupportTicketMessage_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "SupportTicketMessage" DROP CONSTRAINT "SupportTicketMessage_userId_fkey";

-- DropTable
DROP TABLE "SupportTicket";

-- DropTable
DROP TABLE "SupportTicketMessage";

-- CreateTable
CREATE TABLE "IssuedProduct" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comment" TEXT,

    CONSTRAINT "IssuedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeclinedProduct" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "declinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,

    CONSTRAINT "DeclinedProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IssuedProduct" ADD CONSTRAINT "IssuedProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssuedProduct" ADD CONSTRAINT "IssuedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeclinedProduct" ADD CONSTRAINT "DeclinedProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeclinedProduct" ADD CONSTRAINT "DeclinedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
