import React from 'react';
import { ShowcaseWrapper } from '../Components/Styles/GlobalStyle';

const Course = () => {
    return (
        <>
            <ShowcaseWrapper height="50vh" bgImage={require("../Assets/Images/austin-distel-rxpThOwuVgE-unsplash.jpg")}>
                <div className="container-fluid" id="course-showcase-color">
                    <p className="p-5 bg-warning">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque possimus animi nobis recusandae officiis velit nisi voluptate in aliquid eligendi aut adipisci, repellendus voluptates nam, ab iste distinctio enim libero quam incidunt id. Excepturi, explicabo quisquam laudantium beatae perspiciatis non quas veritatis modi nemo adipisci aperiam ipsa illo, reprehenderit esse!</p>
                </div>
            </ShowcaseWrapper>
            <h1>The course here</h1>
        </>
    );
};

export default Course;