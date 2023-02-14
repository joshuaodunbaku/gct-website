import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import { Hover } from './Course.style';

const CourseCard = ({ courseDetail }) => {
    let { name, id, preview, category, imgPath } = courseDetail;
    const location = useLocation();
    const presentUrl = `${location.pathname}/${name.toLowerCase()}`; // the url to the course click on
    let categoryName = category[0].replace(" ", '-').toLowerCase(); // select the first category of the category array and modify string
    const createUrl = () => {
        if (presentUrl !== "/courses" && !presentUrl.includes("courses")) {
            return `/courses/${categoryName}/${name.replace(" ", '-').toLowerCase()}`;
        }
        else {
            return `${categoryName}/${name.replace(" ", '-').toLowerCase()}`;
        }
    };
    console.log(location.pathname, "at Course Card", presentUrl);
    return (
        <>
            {/* <Hover href={`/${courseurl}`}> */}
            <Hover href={`${createUrl()}`}>
                <Card className="my-2 mx-md-2 b-card">
                    <Card.Img
                        variant="top"
                        src={imgPath}
                        height="180px"
                        width="100%"
                    />
                    <Card.Body className="text-dark">
                        <Card.Title className="fs-3">{name}</Card.Title>
                        {/* <Card.Title className="d-flex text-secondary fw-normal"><p>Tutor: {tutor}</p></Card.Title> */}
                        <Card.Text>
                            {preview || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                        </Card.Text>
                        <Card.Link className="btn btn-outline-warning">Learn More...</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        {category.map((elem) => (<span id={elem} className="badge bg-secondary rounded-pill">{elem}</span>))}
                    </Card.Footer>
                </Card>
            </Hover>
        </>
    );
};

export default CourseCard;