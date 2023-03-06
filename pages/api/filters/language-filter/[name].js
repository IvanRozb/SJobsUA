import { getAllVacancies } from "@/helper/api";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({
      error: "Method Not Allowed",
      message:
        "The requested resource does not support the HTTP method used in the request.",
    });
    return;
  }

  const name = req.query.name;
  if (!name || name.trim().length === 0) {
    res.status(400).json({ message: "Name is empty!" });
  }

  const vacancies = await getAllVacancies(name);

  res.status(200).json({
    vacancies,
  });
}
