import React, { useEffect } from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth', duration: "10s" });
    };
    useEffect(() => scrollToTop(), []);
    return (
        <div
            className="container-fluid text-center py-4 text-white d-flex flex-column align-items-center justify-content-center"
            style={{
                backgroundColor: "#2b1e5b",
            }}
        >
            <div className='position-fixed bottom-0 end-0 bg-danger m-2 p-2 rounded-pill'><a target={"_blank"} rel={"noreferrer"} className='text-white text-decoration-none' href="https://wa.me/2348034262759">Chat with Us</a></div>
            Copyright &copy; Genius Computer Technologies. 2023
            <button className='border-none bg-transparent border-0 btn btn-link text-white' onClick={scrollToTop}>Scroll to top</button>
        </div>
    );
};

export default Footer;