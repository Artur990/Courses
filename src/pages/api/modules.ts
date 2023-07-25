import { questions } from "@/data/course";
// import prisma from "../../lib/prisma";

import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      //  const question = JSON.parse(questions);
      // const result = await db.question.create({
      //   question,
      // });
      // res.json(result);
      // const results = await Promise.all(
      //   questions.map((question) =>
      //     db.question.create({
      //       data: question,
      //     })
      //   )
      // );
      // res.json(results);
    } catch (error) {
      res.status(500).json({
        error: "Wystąpił błąd podczas dodawania pytania do bazy danych.",
      });
    }
  } else if (req.method === "GET") {
    // const result = await db.question.findMany({
    //   include: {
    //     contents: {
    //       include: {
    //         subContents: true,
    //       },
    //     },
    //   },
    // });
    // res.json(result);
  }
}
