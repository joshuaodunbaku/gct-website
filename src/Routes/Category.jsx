import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../Components/CourseCard/CourseCard';
import Grid from '../Components/Grid/Grid';
import { ShowcaseWrapper } from '../Components/Styles/GlobalStyle';
import WordSpan from '../Components/WordSpan/WordSpan';
import { data } from '../data';
import { hyphenToSpace } from '../helpers';
import Footer from './Footer';
import NavBar from './Navbar';

const Category = () => {
    const { courses } = data;
    const { categories } = useParams();
    let categoryName = hyphenToSpace(categories).toLowerCase();

    // gets the courses that are in a category
    let categoryCourses = courses.filter((elem) => elem.category.find(e => {
        return e.toLowerCase() === categoryName;
    }));


    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };
        scrollToTop();
    });
    return (
        <>
            <NavBar />
            <ShowcaseWrapper className="text-white text-center d-flex flex-column justify-content-center align-items-center" bgImage={require("../Assets/Images/showcase.jpg")} height="30vw">
                <h1 className='fw-bold'>
                    Explore Different <WordSpan color={"lightBlue"}>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</WordSpan> Courses
                </h1>
            </ShowcaseWrapper>
            <div className="container-lg mx-auto py-4">
                <Grid header={categoryName.toUpperCase()}>
                    {categoryCourses.map((course) => (
                        <CourseCard key={course.name} courseDetail={course} />
                    ))}
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Category;