// components
import { Hover } from "./CategoryPrev.style";
import { NavLink } from "react-router-dom";
import Grid from "../Grid/Grid";
import CourseCard from "../CourseCard/CourseCard";
// context
import MySpinner from "../Spinner/Spinner";
import { hyphenToSpace } from "../../helpers";
import { data } from "../../data";

const CategoryPrev = ({ header, link }) => {
  const courses = data.courses;
  let categoryCourses = [];
  // removes the hyphen from the link
  let categoryName = hyphenToSpace(link).toLowerCase();

  // sets the courses that are in a category
  categoryCourses = courses.filter((elem) =>
    elem.category.find((e) => {
      return e.toLowerCase() === categoryName;
    })
  );

  return (
    <div className="container-lg py-4 mx-auto">
      {/* <div className="py-4 mx-auto"> */}
      <NavLink to={`courses/${link}`} className="text-decoration-none">
        <h1 className="text-decoration-none py-3">
          <Hover>
            {header}
            {" >"}
          </Hover>
        </h1>
      </NavLink>
      {/* <Grid className="d-flex flex-column align-items-center mx-auto"> */}
      <Grid className="container-fluid">
        {categoryCourses ? (
          categoryCourses.slice(0, 4).map((course) => (
            <CourseCard key={course.name} courseDetail={course} />
          ))
        ) :
          <MySpinner />
        }

      </Grid>
    </div>
  );
};

export default CategoryPrev;
