import React from 'react';
import { ReactComponent as ShowcaseImg } from "../Assets/Images/webDeveloper.svg";
import { Div, SlideInButton } from '../Components/Styles/Home.style';
import SlideButton from '../Components/SlideButton/SlideButton';
import { ShowcaseWrapper } from '../Components/Styles/GlobalStyle';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CategoryPrev from '../Components/CategoryPrev/CategoryPrev';
import Footer from './Footer';
import WordSpan from '../Components/WordSpan/WordSpan';

const Home = () => {
    return (
        <Div>
            <ShowcaseWrapper
                className="text-white text-center text-md-start d-flex flex-column justify-content-end align-items-center"
                bgImage={require("../Assets/Images/pexels-christina-morillo-1181233.jpg")}
            >
                <div className="p-md-5 mb-5">
                    <h1>Build A Career With Us</h1>
                    <p>
                        We provide a diploma as well as certification training courses in
                        the field of Web Designing, Web Development, Software Development,
                        along with Software Engineering.
                    </p>
                    <SlideButton>
                        {/* <button className="css-button-sliding-to-left--yellow"> */}
                        <a target={"_blank"} rel={"noreferrer"} className='text-white text-decoration-none' href="https://wa.me/2348034262759?text=Hello, my name is">Get Started</a>
                        {/* </button> */}
                    </SlideButton>
                </div>
            </ShowcaseWrapper>

            <div className="mx-auto mt-4 m-5">
                <h1 className="py-3 text-center">
                    Explore <WordSpan color={"lightBlue"}>Top</WordSpan> Courses
                </h1>
                <div className="container-lg d-flex mx-auto flex-column flex-md-row justify-content-center align-items-center">
                    <Card className="my-2 mx-sm-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/HTML1.png")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>ReactJS</Card.Title>
                            <Card.Text>
                                React is a JavaScript library for building user interfaces. React is used to build single-page applications
                            </Card.Text>
                            <Card.Link className="btn btn-outline-warning" href='/courses/library/reactjs'>Learn More...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="my-2 mx-md-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/HTML1.png")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>Java</Card.Title>
                            <Card.Text>
                                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as posible.
                            </Card.Text>
                            <Card.Link className="btn btn-outline-warning" href='/courses/'>Learn More...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="my-2 mx-md-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/HTML1.png")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>HTML & CSS</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <Card.Link className="btn btn-outline-warning">Learn More...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="text-center my-3">
                    <button className="btn btn-outline-warning btn-lg px-3 py-2">
                        <Link className='text-decoration-none text-warning' to="courses">Explore more courses...</Link>
                    </button>
                </div>
            </div>
            {/* ABOUT US */}
            <div className="container-fluid" id="aboutPrev">
                <div className="container-lg">
                    <div className="row text-white p-2 p-md-5 py-4">
                        <div className="container-lg col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1>About Us</h1>
                            <p className="text-center text-md-left">
                                <em>Genius Computer Technolgies</em> is registered as Training
                                Institute and is located at Quarry Area, Abeokuta recognized for
                                offering specialist training. We provide a
                                diploma as well as certification training courses in the field
                                of Web Designing, Software Development, Web Development and more.
                                Our training course curriculum is planned to equip you with
                                relevant information regarding the best and most current
                                developments that are being made use of in the sector. We
                                provide the expert and also trustworthy IT training courses to
                                corporate and also specific clients. We have numerous training courses to
                                provide, depending upon the requirements and also choices of our
                                clients. Any individual could select the very best training
                                course based on their requirements and also interests to become
                                a specialized individual in that specific area.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
                            {/* <img
                            src={require("../Assets/Images/showcase.jpg")}
                            alt=""
                            width={"100%"}
                        /> */}
                            <ShowcaseImg width={"100%"} />
                        </div>
                        <SlideInButton className='text-center my-2'>
                            <Link to={"/about"}>
                                <button className="css-button-sliding-to-left--yellow">
                                    Learn More...
                                </button></Link>
                        </SlideInButton>
                    </div>
                </div>

            </div>

            {/* <div className="container-fluid px-md-5 bg-light my-5"> */}
            <div className="container-fluid px-md-5 bg-light my-5">
                <CategoryPrev link="web-development" header="Web Development Courses" />
            </div>
            {/* <div className="container-fluid px-md-5"> */}
            <div className="container-fluid px-md-5">
                <CategoryPrev link={"software-development"} header={"Software Devlopment Courses"} />
            </div>

            {/* <div className="container-fluid px-md-5"> */}
            <div className="container-fluid px-md-5">
                <CategoryPrev link={"web-design"} header={"Web Design"} />
            </div>

            <div className="contianer-fluid">
                {/* <WavyBg /> */}
            </div>
            <Footer />
        </Div>
    );
};

export default Home;