-- CreateTable
CREATE TABLE `QuizQuestion` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `questionText` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuizAnswer` (
    `id` VARCHAR(191) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `QuizAnswer` ADD CONSTRAINT `QuizAnswer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `QuizQuestion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
