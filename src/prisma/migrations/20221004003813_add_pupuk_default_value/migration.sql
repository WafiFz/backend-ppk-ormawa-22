-- AlterTable
ALTER TABLE `pupuk` MODIFY `status` ENUM('PESANAN_BARU', 'PROSES', 'SELESAI', 'TERKENDALA', 'BATAL') NOT NULL DEFAULT 'PESANAN_BARU';

-- AlterTable
ALTER TABLE `sampah` MODIFY `status` ENUM('PENJEMPUTAN_BARU', 'PROSES', 'SELESAI', 'TERKENDALA', 'BATAL') NOT NULL DEFAULT 'PENJEMPUTAN_BARU';
