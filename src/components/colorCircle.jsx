import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles/colorcircle.css"

const ColorCircle = (props) => {

    const [backOff, setBackOff] = useState("#cccccc");
    const [backOn, setBackOn] = useState("green");

    const styleDef = {
        "background-color": backOff,
    }

    const stylePick = {
        "background-color": backOn,
        "zoom": "1.3"
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
        <div className='circle' onClick={isPicked} style={style}>
        </div>
    );
};


ColorCircle.propTypes = {
    background: PropTypes.string,
};

export default ColorCircle;
