-- CreateTable
CREATE TABLE `UserAcess` (
    `id` VARCHAR(191) NOT NULL,
    `userID` VARCHAR(191) NULL,
    `acessID` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Acess` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Acess_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAcess` ADD CONSTRAINT `UserAcess_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAcess` ADD CONSTRAINT `UserAcess_acessID_fkey` FOREIGN KEY (`acessID`) REFERENCES `Acess`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
