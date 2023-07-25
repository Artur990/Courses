import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const add = await db.user.create({
        data: {
          name: "Eloise",
          jobTitle: "Programmer",
        },
      });
      //   add()
      res.json("Użytkownik dodany pomyślnie.");
    } catch (error) {
      res.status(500).json({
        error: "Wystąpił błąd podczas dodawania użytkownika do bazy danych.",
      });
    }
  } else if (req.method === "GET") {
    try {
      const users = await db.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({
        error: "Wystąpił błąd podczas pobierania użytkowników z bazy danych.",
      });
    }
  }
}

// const [users, setUsers] = useState<User[]>([]);

// async function addCourses() {
//   try {
//     const res = await fetch("/api/courses", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(courses),
//     });

//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }

//     const { data } = await res.json();

//     console.log("Data successfully added:", data);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
// useEffect(() => {
//   // console.log(courses[0]);
//   // addUser();
// }, []);

// const fetchUsers = async () => {
//   try {
//     const response = await fetch("/api/test"); // Domyślna metoda to GET
//     const data = await response.json();
//     setUsers(data); // Aktualizuje stan użytkowników
//     console.log(data);
//   } catch (error) {
//     console.error("Błąd podczas pobierania użytkowników:", error);
//   }
// };

// const addUser = async () => {
//   try {
//     const response = await fetch("/api/test", { method: "POST" });
//     const message = await response.text();
//     console.log(message); // Powinno wyświetlić "Użytkownik dodany pomyślnie."
//     fetchUsers(); // Aktualizuje listę użytkowników po dodaniu nowego
//   } catch (error) {
//     console.error("Błąd podczas dodawania użytkownika:", error);
//   }
// };
