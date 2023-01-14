import { prisma } from "@/server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const { questionText, formFields } = req.body;
      const question = await prisma.quizQuestion.create({
        data: {
          questionText,
          quizAnswer: {
            createMany: {
              data: formFields,
            },
          },
        },
        include: {
          quizAnswer: true,
        },
      });
      res.status(201).json(question);
      break;
    // case "DELETE":
    //   const { id } = req.params;
    //   const deletedQuestion = await prisma.quizQuestion.delete({
    //     where: {
    //       id: id,
    //     },
    //     include: {
    //       quizAnswer: true,
    //     },
    //   });
    //   res.status(201).json(deletedQuestion);
    //   break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
