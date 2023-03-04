import { useLocation, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb";
import SlideButton from "../Components/SlideButton/SlideButton";
import { data } from "../data";
import { hyphenToSpace } from "../helpers";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Course = () => {
    const { name: getClickedCourse } = useParams();
    const { courses } = data;
    let clickedCourse = courses.filter(
        (elem) => elem.name.toLowerCase() === hyphenToSpace(getClickedCourse)
    );
    let { name, imgPath, info } = clickedCourse[0];
    return (
        <>
            <NavBar />
            <BreadCrumb
                className="shadow shadow-lg"
                coursePath={useLocation().pathname.replace("/", "")}
            />
            <div
                className="container-fluid bg-light d-flex flex-column justify-content-center"
            >
                <div className="container-lg mt-5">
                    <div className="row align-items-center">
                        <h1 className="display-xl-1 display-4">{name}</h1>
                        <div className="col-12 col-md-5 my-3 my-md-0">
                            <img
                                src={imgPath}
                                alt="img"
                                style={{ maxHeight: "450px" }}
                                width={"100%"}
                            />
                        </div>
                        <div className="col-12 col-md-7">
                            <p className="fs-5">{info.preview}</p>
                            {info.additionalInfo && <p className="fs-5">{info.additionalInfo}</p>}
                            <a
                                target={"_blank"}
                                rel={"noreferrer"}
                                href={"https://wa.me/2348034262759"}
                            >
                                <SlideButton height={"50px"} radius="50vw">
                                    Apply Now
                                </SlideButton>
                            </a>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <h2 className="bold">What you will learn</h2>
                        {info.note && (<b>Note: <code>{info.note}</code></b>)}
                        <div className="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Topics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {info.topics.map((topic) => {
                                        return (<tr>
                                            <th scope="row">#</th>
                                            <td>{topic}</td>
                                        </tr>);
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Course;
