import { Link, useLocation, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb/BreadCrumb";
import SlideButton from "../Components/SlideButton/SlideButton";
import { data } from "../data";
import { hyphenToSpace } from "../helpers";
import Footer from "./Footer";

const Course = () => {
    const { name: getClickedCourse } = useParams();
    const { courses } = data;
    let clickedCourse = courses.filter((elem) => elem.name.toLowerCase() === hyphenToSpace(getClickedCourse));
    let { name, imgPath, preview } = clickedCourse[0];
    console.log(clickedCourse);
    console.log(getClickedCourse, "from Course Comp");
    return (
        <>
            <BreadCrumb className="shadow shadow-lg" coursePath={useLocation().pathname.replace("/", "")} />
            <div className="container-fluid bg-light d-flex flex-column justify-content-center" style={{ height: "80vh" }}>
                <div className="container-lg d-flex flex-column flex-md-row align-items-center">
                    <div className="order-2 order-md-1 me-md-4">
                        <h1 className="display-1">{name}</h1>
                        <p className="fs-4">{preview}
                        </p>
                        <a target={"_blank"} rel={"noreferrer"} href={"https://wa.me/2348034262759"}><SlideButton height={"50px"} radius="50vw">Apply Now</SlideButton></a>
                    </div>
                    <div className="order-1 order-md-2">
                        <img src={imgPath} alt="img" style={{ maxHeight: "500px" }} width={"100%"} />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Course;