import React from 'react';
// import { useParams } from 'react-router-dom';
import CourseCard from '../Components/CourseCard/CourseCard';
import Grid from '../Components/Grid/Grid';
import { data } from '../data';
import Footer from './Footer';

const Courses = () => {
    // const {category} = useParams()
    return (
        <>
            <div className='container-lg py-4'>
                <Grid header={"All"}>
                    {data.courses.map((course) => (<CourseCard key={course.id} courseDetail={course} />))}
                </Grid>
            </div>
            <Footer />
        </>
    );
};

export default Courses;