import styled from "styled-components";

// Sliding-in background button
export const Wrapper = styled.div`
  .css-button-sliding-to-left--yellow {
    min-width: ${({ width }) => width || "150px"};
    height: ${({ height }) => height || "40px"};
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: ${({ radius }) => radius || "5px"};
    z-index: 0;
    background: transparent;
    overflow: hidden;
    border: 2px solid #ffd819;
    color: #ffd819;
  }
  .css-button-sliding-to-left--yellow:hover {
    color: #000;
  }
  .css-button-sliding-to-left--yellow:hover:after {
    width: 100%;
  }
  .css-button-sliding-to-left--yellow:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #ffd819;
  }
`;
