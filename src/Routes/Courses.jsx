import React from 'react';
import CourseCard from '../Components/CourseCard/CourseCard';
import Grid from '../Components/Grid/Grid';
import { data } from '../data';
import Footer from './Footer';
import NavBar from './Navbar';

const Courses = () => {
    return (
        <>
            <NavBar />
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