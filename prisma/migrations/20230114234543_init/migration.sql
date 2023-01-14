-- DropForeignKey
ALTER TABLE `quizanswer` DROP FOREIGN KEY `QuizAnswer_questionId_fkey`;

-- AddForeignKey
ALTER TABLE `QuizAnswer` ADD CONSTRAINT `QuizAnswer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `QuizQuestion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
