import { CoursesServices } from "@/services/cursesService";
import { useQuery } from "@tanstack/react-query";

export const useCourses = (
  sort?: string,
  language?: string,
  category?: string,
  page?: string
) => {
  return useQuery(["Courses", { sort, language, category, page }], () =>
    CoursesServices.getCourses(sort, language, category, page)
  );
};
