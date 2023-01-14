/*
  Warnings:

  - You are about to drop the column `date` on the `quizquestion` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `QuizAnswer_questionId_fkey` ON `quizanswer`;

-- AlterTable
ALTER TABLE `quizquestion` DROP COLUMN `date`;
