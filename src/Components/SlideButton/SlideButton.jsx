import React from 'react';
import { Wrapper } from './SlideButton.style';

const SlideButton = ({ children, link, width, height, ...others }) => {
    return (
        <Wrapper width={width} height={height} {...others}>
            <button className="css-button-sliding-to-left--yellow">
                {children}
            </button>
        </Wrapper>
    );
};

export default SlideButton;