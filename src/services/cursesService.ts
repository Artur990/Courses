import { Titems } from "@/types/types";
import { apiCourses } from "../configs/axios";

export const getCourses = async (
  sort?: string,
  language?: string,
  category?: string,
  page?: string
) => {
  const params = new URLSearchParams();
  if (sort) {
    params.append("sort", sort);
  }
  if (language) {
    params.append("language", language);
  }
  if (category) {
    params.append("category", category);
  }
  if (page) {
    params.append("page", page);
  }
  const res = await apiCourses.get<Titems>("", { params });
  return res.data;
};

export const CoursesServices = {
  getCourses,
};
