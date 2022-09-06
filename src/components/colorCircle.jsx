import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles/colorCircle.css";

const def = {
    "width": "100px",
    "height": "100px",
    "background-color": "black",
    "border-radius": "50%"
}



const ColorCircle = (props) => {

    const picked = {
        "width": "120px",
        "height": "120px",
        "background-color": props.background,
        "border-radius": "50%"
    }

    const [style, setStyle] = useState(def);

    const changeStyle = () => {
        if (style === def) {
            setStyle(picked);
        } else {
            setStyle(def);
        }
    }

    return (
        <div onClick={changeStyle} style={style}>
        </div >
    );
};


ColorCircle.propTypes = {
    background: PropTypes.string,
    pick: PropTypes.bool
};


export default ColorCircle;
