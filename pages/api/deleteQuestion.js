import { prisma } from "@/server/db/client";

export default async function handler(req, res) {
  // const { id } = req.body;
  try {
    const { id } = req.params;
    // const deletedQuestion = await prisma.quizQuestion.delete({
    //   where: {
    //     id,
    //   },
    // });
    res.status(201).json(req);
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a food item." });
  }
}
