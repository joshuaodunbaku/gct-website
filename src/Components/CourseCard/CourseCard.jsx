import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { spaceToHypen } from "../../helpers";
import { Hover } from "./Course.style";

const CourseCard = ({ courseDetail }) => {
  let { name, info, category, imgPath } = courseDetail;
  const navigate = useNavigate();
  // const presentUrl = `${location.pathname}/${name.toLowerCase()}`; // the url to the course click on
  let categoryName = spaceToHypen(category[0]).toLowerCase(); // select the first category of the category array and modify string
  const createUrl = () => {
    return `/courses/${categoryName}/${spaceToHypen(name).toLowerCase()}`;
  };
  return (
    <>
      <Hover>
        <Card className="my-sm-2 mx-md-2 h-100 my-auto b-card">
          <Card.Img variant="top" src={imgPath} height="200px" width="100%" />
          <Card.Body className="text-dark d-flex flex-column">
            <Card.Title className="fs-3">{name}</Card.Title>
            {/* <Card.Title className="d-flex text-secondary fw-normal"><p>Tutor: {tutor}</p></Card.Title> */}
            <Card.Text className="my-auto">
              {info.preview ||
                "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
            </Card.Text>
            <Card.Link
              className="btn btn-outline-warning mt-auto"
              onClick={() => navigate(`${createUrl()}`)}
            >
              Learn More...
            </Card.Link>
          </Card.Body>
          <Card.Footer>
            {category.map((elem) => (
              <span key={elem} className="badge bg-secondary rounded-pill">
                {elem}
              </span>
            ))}
          </Card.Footer>
        </Card>
      </Hover>
    </>
  );
};

export default CourseCard;
