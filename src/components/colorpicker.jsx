import React, { useState, handleChangeComplete } from 'react';
import { CompactPicker } from 'react-color';
import "./styles/colorpicker.css"
import ColorCircle from './colorCircle';


const Colorpicker = () => {
    const [background, setBackground] = useState("#fff");

    handleChangeComplete = (color) => {
        setBackground(color.hex)
        console.log(color.hex);
    }

    const hola = () => {
        console.log("hola");
    }

    return (
        <div className='container'>
            <div className='colors'>
                <div onClick={hola}>
                    <ColorCircle background={background} />
                </div>
                <ColorCircle />
                <ColorCircle />
                <ColorCircle />
                <ColorCircle />

            </div>
            <CompactPicker color={background}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default Colorpicker;
