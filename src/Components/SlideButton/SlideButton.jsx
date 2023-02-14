import React from 'react';
import { Wrapper } from './SlideButton.style';

const SlideButton = ({ children, link }) => {
    console.log(link, "SLIDEBUTTON");
    return (
        <Wrapper>
            <button className="css-button-sliding-to-left--yellow">
                {children}
            </button>
        </Wrapper>
    );
};

export default SlideButton;