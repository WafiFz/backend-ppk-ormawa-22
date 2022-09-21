/*
  Warnings:

  - You are about to drop the column `update_at` on the `admin` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `penjemputan_sampah` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `penjemputan_sampah_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `petugas` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `pupuk` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `pupuk_transaction` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `sampah` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admin` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `penjemputan_sampah` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `penjemputan_sampah_transaction` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `petugas` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `pupuk` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `pupuk_transaction` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `sampah` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NULL;
