-- AlterTable
ALTER TABLE `penjemputan_sampah_transaction` ADD COLUMN `status` ENUM('PENDING', 'PROCESS', 'REJECTED', 'DONE') NULL;
