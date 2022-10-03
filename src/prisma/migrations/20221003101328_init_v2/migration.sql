/*
  Warnings:

  - You are about to drop the column `description` on the `pupuk` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `pupuk` table. All the data in the column will be lost.
  - You are about to drop the column `sender_address` on the `pupuk` table. All the data in the column will be lost.
  - You are about to drop the column `selling_price` on the `sampah` table. All the data in the column will be lost.
  - You are about to alter the column `sampah_category` on the `sampah` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Sampah_sampah_category")`.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `penjemputan_sampah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `penjemputan_sampah_transaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `petugas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pupuk_transaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Pupuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Pupuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Pupuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_price` to the `Pupuk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address_notes` to the `Sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule_pickup` to the `Sampah` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Sampah` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `penjemputan_sampah` DROP FOREIGN KEY `penjemputan_sampah_petugas_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah_transaction` DROP FOREIGN KEY `penjemputan_sampah_transaction_penjemputan_sampah_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah_transaction` DROP FOREIGN KEY `penjemputan_sampah_transaction_sampah_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah_transaction` DROP FOREIGN KEY `penjemputan_sampah_transaction_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `pupuk_transaction` DROP FOREIGN KEY `pupuk_transaction_pupuk_id_fkey`;

-- DropForeignKey
ALTER TABLE `pupuk_transaction` DROP FOREIGN KEY `pupuk_transaction_user_id_fkey`;

-- AlterTable
ALTER TABLE `pupuk` DROP COLUMN `description`,
    DROP COLUMN `price`,
    DROP COLUMN `sender_address`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `status` ENUM('PESANAN_BARU', 'PROSES', 'SELESAI', 'TERKENDALA', 'BATAL') NOT NULL,
    ADD COLUMN `status_description` VARCHAR(191) NULL,
    ADD COLUMN `total_price` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `sampah` DROP COLUMN `selling_price`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `address_notes` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `schedule_pickup` ENUM('SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU', 'MINGGU') NOT NULL,
    ADD COLUMN `status` ENUM('PENJEMPUTAN_BARU', 'PROSES', 'SELESAI', 'TERKENDALA', 'BATAL') NOT NULL,
    ADD COLUMN `status_description` VARCHAR(191) NULL,
    MODIFY `sampah_category` ENUM('ORGANIK', 'ANORGANIK', 'CAMPURAN') NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `region` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `penjemputan_sampah`;

-- DropTable
DROP TABLE `penjemputan_sampah_transaction`;

-- DropTable
DROP TABLE `petugas`;

-- DropTable
DROP TABLE `pupuk_transaction`;
