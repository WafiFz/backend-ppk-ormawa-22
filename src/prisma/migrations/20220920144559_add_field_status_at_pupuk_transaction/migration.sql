-- AlterTable
ALTER TABLE `pupuk_transaction` ADD COLUMN `status` ENUM('PENDING', 'PROCESS', 'REJECTED', 'DONE') NULL;
