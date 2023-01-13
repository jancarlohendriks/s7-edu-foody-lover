import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;
  const { id, date, title, paragraph } = req.body;

  switch (method) {
    case "GET":
      const moments = await prisma.moment.findMany();
      res.status(200).json(moments);
      break;
    case "PUT":
      const newMoment = await prisma.moment.update({
        where: {
          id: {
            contains: id,
          },
        },
        data: {
          date,
          title,
          paragraph,
        },
      });
      res.status(201).json(newMoment);
      break;
    case "POST":
      const moment = await prisma.moment.createMany({
        data: [
          {
            date,
            title,
            paragraph,
          },
        ],
      });
      res.status(201).json(moment);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
