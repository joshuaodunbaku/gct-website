import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <div
            className="container-fluid text-center py-4 text-white d-flex flex-column align-items-center justify-content-center"
            style={{
                backgroundColor: "#2b1e5b",
            }}
        >
            Copyright &copy; Genius Computer Technologies. 2022
            <button className='border-none bg-transparent border-0 btn btn-link text-white' onClick={scrollToTop}>Scroll to top</button>
        </div>
    );
};

export default Footer;