import React from 'react';

const BUTTON_COLOR = {
    lightBlue: "#70c0e8",
    gold: "#f9d20a",
    darkBrown: "#593d0b",
};
const WordSpan = ({ color, children, bold }) => {
    return (
        <span style={{ color: `${BUTTON_COLOR[color]}`, fontWeight: bold && "bold" }}>{children}</span>
    );
};

export default WordSpan;