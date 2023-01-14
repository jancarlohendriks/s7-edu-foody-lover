import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { questionText } = req.body;
      const question = await prisma.quizQuestion.create({
        data: {
          questionText,
          quizAnswer: {
            createMany: {
              data: [
                {
                  answerText: "yes",
                },
                {
                  answerText: "yes",
                  isCorrect: true,
                },
              ],
            },
          },
        },
        include: {
          quizAnswer: true,
        },
      });
      res.status(201).json(question);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
