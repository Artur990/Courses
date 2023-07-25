import { promises as fs } from "fs";

import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import completion  form './../../completions.json'
import path from "path";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    // Odczytujemy obecny stan ukończonych lekcji
    const filePath = path.join(process.cwd(), "completions.json");
    const fileContent = fs.readFile(filePath);
    // const completions = JSON.parse(fileContent);

    // Dodajemy ukończoną lekcję do stanu
    // completions[lessonId] = true;

    // Zapisujemy zmieniony stan z powrotem do pliku
    // await fs.writeFile(filePath, JSON.stringify(completions, null, 2));

    res.status(200).json({ message: "Lesson marked as completed.", data });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
