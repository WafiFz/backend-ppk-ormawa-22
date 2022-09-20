/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rw` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME(3) NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_picture` VARCHAR(191) NULL,
    ADD COLUMN `rt` VARCHAR(191) NOT NULL,
    ADD COLUMN `rw` VARCHAR(191) NOT NULL,
    ADD COLUMN `update_at` DATETIME(3) NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Petugas` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sampah` (
    `id` VARCHAR(191) NOT NULL,
    `selling_price` DECIMAL(65, 30) NULL,
    `sampah_category` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penjemputan_sampah` (
    `id` VARCHAR(191) NOT NULL,
    `schedule` DATETIME(3) NOT NULL,
    `name` VARCHAR(191) NULL,
    `petugas_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penjemputan_sampah_transaction` (
    `id` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `quantity` DECIMAL(65, 30) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `sampah_id` VARCHAR(191) NOT NULL,
    `penjemputan_sampah_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pupuk` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `sender_address` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pupuk_transaction` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` DECIMAL(65, 30) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_receipt_image` VARCHAR(191) NOT NULL,
    `payment_status` ENUM('VALID', 'UNVALID', 'UNCHECKED') NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `pupuk_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sampah` ADD CONSTRAINT `Sampah_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah` ADD CONSTRAINT `penjemputan_sampah_petugas_id_fkey` FOREIGN KEY (`petugas_id`) REFERENCES `Petugas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah_transaction` ADD CONSTRAINT `penjemputan_sampah_transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah_transaction` ADD CONSTRAINT `penjemputan_sampah_transaction_sampah_id_fkey` FOREIGN KEY (`sampah_id`) REFERENCES `Sampah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah_transaction` ADD CONSTRAINT `penjemputan_sampah_transaction_penjemputan_sampah_id_fkey` FOREIGN KEY (`penjemputan_sampah_id`) REFERENCES `penjemputan_sampah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pupuk_transaction` ADD CONSTRAINT `pupuk_transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pupuk_transaction` ADD CONSTRAINT `pupuk_transaction_pupuk_id_fkey` FOREIGN KEY (`pupuk_id`) REFERENCES `Pupuk`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
