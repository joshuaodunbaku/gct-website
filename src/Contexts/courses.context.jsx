import { createContext, useState, useEffect } from "react";
import { data } from "../data";
import { hyphenToSpace } from "../helpers";

const addCategoryName = (link) => {
  return hyphenToSpace(link).toLowerCase();
};
const addCourseCategory = (courses, link) => {
  let categoryCourses = [];
  // removes the hyphen from the link

  // sets the courses that are in a category
  categoryCourses = courses.filter((elem) =>
    elem.category.find((e) => {
      return e.toLowerCase() === addCategoryName(link);
    })
  );
  return categoryCourses;
};

// actual value you want to access
export const CoursesContext = createContext({
  courses: [],
  setCourses: () => { },
  category: [],
  getCourseCategory: () => { },
  categoryName: "",
  getCategoryName: () => { }
});

const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => setCourses(data.courses), []);

  const getCourseCategory = (link) => {
    return addCourseCategory(courses, link);
  };

  const getCategoryName = (link) => {
    setCategoryName(addCategoryName(link));
  };
  const value = { getCourseCategory, categoryName, getCategoryName };
  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;