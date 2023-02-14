import React from 'react';
import { ReactComponent as Img1 } from "../Assets/Untitled/undraw_web_devices_re_m8sc.svg";
// import { ReactComponent as Img2 } from "../Assets/Untitled/undraw_programming_re_kg9v.svg";
import { ReactComponent as Img3 } from "../Assets/Untitled/undraw_asset_selection_re_k5fj.svg";
import { ShowcaseWrapper } from '../Components/Styles/GlobalStyle';
import WordSpan from '../Components/WordSpan/WordSpan';
import SlideButton from '../Components/SlideButton/SlideButton';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <ShowcaseWrapper className="text-white text-center d-flex flex-column justify-content-center align-items-center" bgImage={require("../Assets/Images/aboutUsShowcase.jpg")} height="50vh">
                <h1>About Genius Computer Technologies</h1>
            </ShowcaseWrapper>
            <div className="container my-4 p-3 d-flex flex-column justify-content-center align-items-center">
                <p className="lead m-auto">Genius Computer Technologies is an ICT and computer training institute located at ...</p>
            </div>
            <div className="container-lg my-5">
                <div className="row align-items-center mx-1 shadow-sm py-5 px-2 border border-light">
                    <div className="col-sm-12 col-md-6">
                        <h1>Web <WordSpan color={"gold"}>Development</WordSpan> Institute</h1>
                        <p>We provide the expert and also trustworthy IT training courses to corporate and also specific clients. In this manner, we are taken into consideration as the most effective and even expert to get indulged in the training sessions to be a professional in the IT area of any kind. We have numerous training courses to provide, depending upon the requirements and also choices of our clients. Any individual could select the very best training course based on their requirements and also interests to become a specialized individual in that specific area.</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        {/* <img src={require("../Assets/Untitled/austin-distel-rxpThOwuVgE-unsplash (1).jpg")} width={"100%"} height={"100%"} alt="" /> */}
                        <Img1 width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className='row my-3 py-4 bg-light text-center'>
                    <div className='col-md col-12 d-none d-md-block'>
                        {/* <img src={require("../Assets/Untitled/clark-tibbs-oqStl2L5oxI-unsplash.jpg")} width="100%" alt="" /> */}
                        <Img3 width="100%" height="150px" />
                    </div>
                    <div className='col-md col-12 d-flex flex-column align-items-center justify-content-center'>
                        <WordSpan className="">Our Mission</WordSpan>
                        <p className='w-75'>To help our students see the practical real life  benefit of ICT and computer knowledge that can be applied easily to their chosen career path or businesses, helping them to see technology as an asset not a liability.</p>
                    </div>
                    <Link to={"/courses"}>
                        <SlideButton children={"Click here to view our Courses"} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AboutUs;