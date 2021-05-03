/*
  Warnings:

  - You are about to drop the column `read` on the `Notification` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Notification` DROP COLUMN `read`,
    ADD COLUMN     `unread` BOOLEAN NOT NULL DEFAULT true;
