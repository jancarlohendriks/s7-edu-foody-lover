/*
  Warnings:

  - You are about to drop the column `answer` on the `quizanswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `quizanswer` DROP COLUMN `answer`,
    ADD COLUMN `answerText` VARCHAR(191) NULL;
