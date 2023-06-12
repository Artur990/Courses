export const getUniqueCategories = (menuItems: any[]) => {
  const uniqueCategories = menuItems.reduce((categories, course) => {
    if (!categories.includes(course.category)) {
      categories.push(course.category);
    }
    return categories;
  }, []);
  return uniqueCategories;
};

export const getUniqueTitles = (menuItems: any[]) => {
  const uniqueTitles = menuItems.reduce((titles, course) => {
    if (!titles.includes(course.title)) {
      titles.push(course.title);
    }
    return titles;
  }, []);
  return uniqueTitles;
};
