/*
  Warnings:

  - You are about to alter the column `questionId` on the `quizanswer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `quizquestion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `quizquestion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `quizanswer` DROP FOREIGN KEY `QuizAnswer_questionId_fkey`;

-- AlterTable
ALTER TABLE `quizanswer` MODIFY `questionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `quizquestion` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `QuizAnswer` ADD CONSTRAINT `QuizAnswer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `QuizQuestion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
