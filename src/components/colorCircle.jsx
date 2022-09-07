import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles/colorCircle.css";

const ColorCircle = (props) => {

    const [backOff, setBackOff] = useState("#000");
    const [backOn, setBackOn] = useState("green");

    const styleDef = {
        "width": "100px",
        "height": "100px",
        "background-color": backOff,
        "border-radius": "50%"
    }

    const stylePick = {
        "width": "120px",
        "height": "120px",
        "background-color": backOn,
        "border-radius": "50%"
    }

    const [picked, setPicked] = useState(false);
    const [style, setStyle] = useState(styleDef);

    const isPicked = () => {
        if (picked === false) {
            setPicked(true)
            setStyle(stylePick)
        } else {
            setPicked(false)
            setStyle(styleDef)
        }
    }

    useEffect(() => {
        if (picked === true) {
            setBackOn(props.background)
            setBackOff(props.background)
            setStyle(stylePick)
        }
    }, [props.background, picked, backOn, backOff]);

    return (
        <div onClick={isPicked} style={style}>
        </div >
    );
};


ColorCircle.propTypes = {
    background: PropTypes.string,
};

export default ColorCircle;
