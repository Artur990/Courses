import { CoursesServices } from "@/services/cursesService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

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
