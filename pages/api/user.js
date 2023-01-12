import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      const users = await prisma.user.findMany();
      res.status(200).json(users);
      break;
    case "POST":
      const { name } = req.body;
      const user = await prisma.user.create({
        data: {
          name,
        },
      });
      res.status(201).json(user);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
