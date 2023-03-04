import React from 'react';
import { ReactComponent as Img1 } from "../Assets/Images/undraw_web_devices_re_m8sc.svg";
import { ReactComponent as Img3 } from "../Assets/Images/undraw_asset_selection_re_k5fj.svg";
import { ShowcaseWrapper } from '../Components/Styles/GlobalStyle';
import WordSpan from '../Components/WordSpan/WordSpan';
import SlideButton from '../Components/SlideButton/SlideButton';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';

const AboutUs = () => {
    return (
        <>
            <NavBar />
            <ShowcaseWrapper className="text-white text-center d-flex flex-column justify-content-center align-items-center" bgImage={require("../Assets/Images/aboutUsShowcase.jpg")} height="50vh">
                <h1>About <WordSpan color={"gold"}>Genius</WordSpan> Computer <WordSpan color={"lightBlue"}>Technologies</WordSpan></h1>
            </ShowcaseWrapper>
            <div className="container my-4 p-3 d-flex flex-column justify-content-center align-items-center">
                <p className="lead m-auto">Genius Computer Technologies is an ICT and computer training institute located at Quarry Rd., Abeokuta, Ogun State.</p>

                <div className="border rounded p-3">
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!4v1677854516568!6m8!1m7!1s2IGte5fqmKB5updktfjp9Q!2m2!1d7.135447066233545!2d3.32676799506113!3f41.432670173653584!4f6.9038258134374075!5f2.494741625711682" style={{ border: "0", width: "300px", height: "450" }} allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="container-lg my-5">
                <div className="row align-items-center mx-1 shadow-sm py-5 px-2 border border-light">
                    <div className="col-sm-12 col-md-6">
                        <h1>Web <WordSpan color={"gold"}>Development</WordSpan> Institute</h1>
                        <p>We provide the expert and also trustworthy IT training courses to corporate and also specific clients. In this manner, we are taken into consideration as the most effective and even expert to get indulged in the training sessions to be a professional in the IT area of any kind. We have numerous training courses to provide, depending upon the requirements and also choices of our clients. Any individual could select the very best training course based on their requirements and also interests to become a specialized individual in that specific area.</p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Img1 width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="container-lg py-4">
                    <div className='row my-3 py-4 text-center'>
                        <div className='col-md col-12 d-none d-md-block'>
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
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;