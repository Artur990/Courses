import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const courses = req.body;
    try {
      const newCourse = await db.course.create({ data: courses });
      console.log(newCourse);
      res
        .status(200)
        .json({ message: "Data successfully added", data: newCourse });
    } catch (e) {
      console.error(e); // log the error in the server console
      res.status(500).json({ error: "Prisma error: " + e });
    }
  } else if (req.method === "GET") {
    try {
      const courses = await db.course.findMany();
      res.status(200).json(courses);
    } catch (e) {
      console.error(e); // log the error in the server console
      res.status(500).json({ error: "Prisma error: " + e });
    }
  } else {
    res.status(405).json({ error: "Only POST and GET requests are allowed" });
  }
}

// const [courses, setCourses] = useState<Tcourses[]>([]);

// useEffect(() => {
//   const getCourses = async () => {
//     try {
//       const res = await fetch("/api/courses", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) {
//         throw new Error(res.statusText);
//       }

//       const data = await res.json();
//       setCourses(data);
//     } catch (error) {
//       console.error("An error occurred:", error);
//     }
//   };

//   getCourses();
// }, []);
