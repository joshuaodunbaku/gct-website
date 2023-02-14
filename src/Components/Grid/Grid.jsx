import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content } from './Grid.css';


const Grid = ({ header, children }) => {
  return (
    <Wrapper>
      {header && <h1>{header} COURSES</h1>}
      <Content>{children}</Content>
    </Wrapper>
  );
};

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;