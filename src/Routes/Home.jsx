import React from "react";
import { ReactComponent as ShowcaseImg } from "../Assets/Images/webDeveloper.svg";
import { ReactComponent as DbImg } from "../Assets/Images/circular puzzle.svg";
import { Div } from "../Components/Styles/Home.style";
import SlideButton from "../Components/SlideButton/SlideButton";
import { ShowcaseWrapper } from "../Components/Styles/GlobalStyle";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import WavyBg from "../Components/AnimatedBg/WavyBg";
import CategoryPrev from "../Components/CategoryPrev/CategoryPrev";
import Footer from "./Footer";
import WordSpan from "../Components/WordSpan/WordSpan";
import NavBar from "./Navbar";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Div>
            <NavBar />
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
                        <a
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="text-white text-decoration-none"
                            href="https://wa.me/2348034262759?text=Hello, my name is"
                        >
                            Get Started
                        </a>
                    </SlideButton>
                </div>
            </ShowcaseWrapper>

            <div className="mx-auto mt-4 m-5">
                <h1 className="py-3 text-center">
                    Explore <WordSpan color={"lightBlue"}>Top</WordSpan> Courses
                </h1>
                <div className="container-lg d-flex mx-auto flex-column flex-md-row justify-content-center align-items-stretch align-items-center">
                    <Card className="my-2 mx-sm-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/react-js1.png")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>ReactJS</Card.Title>
                            <Card.Text>
                                React is a JavaScript library for building user interfaces.
                                React is used to build single-page applications
                            </Card.Text>
                            <Card.Link
                                className="btn btn-outline-warning"
                                onClick={() => navigate("/courses/library/reactjs")}
                            >
                                Learn More...
                            </Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="my-2 mx-md-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/java.jpg")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>Java</Card.Title>
                            <Card.Text>
                                Java is a high-level, class-based, object-oriented programming
                                language that is designed to have as few implementation
                                dependencies as posible.
                            </Card.Text>
                            <Card.Link
                                className="btn btn-outline-warning"
                                onClick={() => navigate("/courses/software-development/java")}
                            >
                                Learn More...
                            </Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card className="my-2 mx-md-2">
                        <Card.Img
                            variant="top"
                            src={require("../Assets/Images/node-js.png")}
                            height="180px"
                            width="100%"
                        />
                        <Card.Body>
                            <Card.Title>Node JS</Card.Title>
                            <Card.Text>
                                Node.js is a cross-platform, open-source server environment that
                                can run on Windows, Linux, Unix, macOS, and more.
                            </Card.Text>
                            <Card.Link
                                className="btn btn-outline-warning"
                                onClick={() => navigate("/courses/database-management/nodejs")}
                            >
                                Learn More...
                            </Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="text-center my-3">
                    <Link className="" to="courses">
                        <SlideButton className="fs-5" height={"50px"} width="250px">
                            Explore more courses...
                        </SlideButton>
                    </Link>
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
                                offering specialist training. We provide a diploma as well as
                                certification training courses in the field of Web Designing,
                                Software Development, Web Development and more. Our training
                                course curriculum is planned to equip you with relevant
                                information regarding the best and most current developments
                                that are being made use of in the sector. We provide the expert
                                and also trustworthy IT training courses to corporate and also
                                specific clients. We have numerous training courses to provide,
                                depending upon the requirements and also choices of our clients.
                                Any individual could select the very best training course based
                                on their requirements and also interests to become a specialized
                                individual in that specific area.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
                            <ShowcaseImg width={"100%"} />
                        </div>
                        <Link className="text-center" to={"/about"}>
                            <SlideButton
                                className="text-center"
                                width={"250px"}
                                height={"50px"}
                            >
                                Learn More...
                            </SlideButton>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-md-5 bg-light my-5">
                <CategoryPrev link="web-development" header="Web Development Courses" />
            </div>

            <div className="position-relative container-fluid p-5 my-5  text-light">
                <WavyBg />
                <div className="container-lg">
                    <h1
                        className="display-3 text-center"
                        style={{ fontFamily: "Phudu, oswald, Verdana", fontWeight: "400" }}
                    >
                        Data Structures And Algorithms
                    </h1>
                    <div className="row my-5 align-items-center text-center">
                        <div className="col-12 col-md-6">
                            <DbImg width={"100%"} height={"100%"} />
                        </div>
                        <div className="fs-3 col-12 col-md-6">
                            <p>
                                Data structure and algorithms are two of the most important
                                aspects of computer science. Data structures allow us to
                                organize and store data, while algorithms allow us to process
                                that data in a meaningful way. Learning data structure and
                                algorithms will help you become a better programmer.
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link
                            to={"/courses/web-development/data-strucutures-and-algorithm"}
                        >
                            <button className="text-white fw-bold fs-5 btn btn-outline-info rounded-pill px-5 py-3">
                                Explore now...
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-md-5">
                <CategoryPrev
                    link={"software-development"}
                    header={"Software Devlopment Courses"}
                />
            </div>

            <div className="container-fluid px-md-5">
                <CategoryPrev link={"web-design"} header={"Web Design"} />
            </div>
            <Footer />
        </Div>
    );
};

export default Home;
