-- DropForeignKey
ALTER TABLE `Sampah` DROP FOREIGN KEY `Sampah_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah` DROP FOREIGN KEY `penjemputan_sampah_petugas_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah_transaction` DROP FOREIGN KEY `penjemputan_sampah_transaction_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `penjemputan_sampah_transaction` DROP FOREIGN KEY `penjemputan_sampah_transaction_sampah_id_fkey`;

-- DropForeignKey
ALTER TABLE `pupuk_transaction` DROP FOREIGN KEY `pupuk_transaction_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `pupuk_transaction` DROP FOREIGN KEY `pupuk_transaction_pupuk_id_fkey`;

-- AlterTable
ALTER TABLE `pupuk_transaction` DROP COLUMN `status`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `Admin`;

-- DropTable
DROP TABLE `Petugas`;

-- DropTable
DROP TABLE `Sampah`;

-- DropTable
DROP TABLE `Pupuk`;

-- CreateTable
CREATE TABLE `admin` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Admin_email_key`(`email` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `petugas` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pupuk` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `sender_address` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sampah` (
    `id` VARCHAR(191) NOT NULL,
    `selling_price` DECIMAL(65, 30) NULL,
    `sampah_category` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    INDEX `Sampah_user_id_fkey`(`user_id` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deleted_at` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `profile_picture` VARCHAR(191) NULL,
    `rt` VARCHAR(191) NOT NULL,
    `rw` VARCHAR(191) NOT NULL,
    `update_at` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email` ASC),
    PRIMARY KEY (`id` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `penjemputan_sampah_petugas_id_fkey` ON `penjemputan_sampah`(`petugas_id` ASC);

-- CreateIndex
CREATE INDEX `penjemputan_sampah_transaction_penjemputan_sampah_id_fkey` ON `penjemputan_sampah_transaction`(`penjemputan_sampah_id` ASC);

-- CreateIndex
CREATE INDEX `penjemputan_sampah_transaction_sampah_id_fkey` ON `penjemputan_sampah_transaction`(`sampah_id` ASC);

-- CreateIndex
CREATE INDEX `penjemputan_sampah_transaction_user_id_fkey` ON `penjemputan_sampah_transaction`(`user_id` ASC);

-- CreateIndex
CREATE INDEX `pupuk_transaction_pupuk_id_fkey` ON `pupuk_transaction`(`pupuk_id` ASC);

-- CreateIndex
CREATE INDEX `pupuk_transaction_user_id_fkey` ON `pupuk_transaction`(`user_id` ASC);

-- AddForeignKey
ALTER TABLE `penjemputan_sampah` ADD CONSTRAINT `penjemputan_sampah_petugas_id_fkey` FOREIGN KEY (`petugas_id`) REFERENCES `petugas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah_transaction` ADD CONSTRAINT `penjemputan_sampah_transaction_sampah_id_fkey` FOREIGN KEY (`sampah_id`) REFERENCES `sampah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penjemputan_sampah_transaction` ADD CONSTRAINT `penjemputan_sampah_transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pupuk_transaction` ADD CONSTRAINT `pupuk_transaction_pupuk_id_fkey` FOREIGN KEY (`pupuk_id`) REFERENCES `pupuk`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pupuk_transaction` ADD CONSTRAINT `pupuk_transaction_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sampah` ADD CONSTRAINT `Sampah_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

