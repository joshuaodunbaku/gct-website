import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content } from './BreadCrumb.css';

const BreadCrumb = ({ coursePath }) => {
    let breadCrumb = coursePath.split("/");
    return (
        <Wrapper>
            <Content>
                <span className='flex-fill'><img src={require("../../Assets/Images/right-arrow.png")} width="10px" height={"10px"} alt='icon' /></span>
                {breadCrumb.map((elem) => (<span className='flex-fill' key={elem}>{elem.toUpperCase()}  <img src={require("../../Assets/Images/right-arrow.png")} width="10px" height={"10px"} alt='icon' /></span>))}
            </Content>
        </Wrapper>
    );
};

BreadCrumb.prototype = {
    movieTitle: PropTypes.string,
};

export default BreadCrumb;