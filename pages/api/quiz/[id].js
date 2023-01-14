import { prisma } from "@/server/db/client";

export default async function handler(req, res) {
  const noteId = req.query.id;
  const { title, content, id } = req.body;
  // DELETE
  if (req.method === "DELETE") {
    const note = await prisma.quizQuestion.delete({
      where: { id: parseInt(noteId) },
    });
    res.status(201).json(note);
  }
  // UPDATE
  else if (req.method === "PUT") {
    const note = await prisma.note.update({
      where: { id: Number(noteId) },
      data: {
        title,
        content,
      },
    });
    res.status(200).json({ message: "Note updated" });
  } else {
    console.log("Note could not be modified");
    res.status(400).json({ message: "Note could not be modified" });
  }
}

// import { prisma } from "@/server/db/client";

// export default async function handler(req, res) {
//   const { id } = req.body;
//   try {
//     // const { id } = req.params;
//     // const deletedQuestion = await prisma.quizQuestion.delete({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     res.status(201).json(id);
//   } catch (error) {
//     res.status(403).json({ err: "Error occured while deleting a food item." });
//   }
// }
