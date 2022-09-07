import React, { useState, handleChangeComplete } from 'react';
import { CompactPicker } from 'react-color';
import "./styles/colorpicker.css"
import ColorCircle from './ColorCircle';


const ColorPicker = () => {
    const [color, setColor] = useState("#fff");

    //Cambia el estado del color al cambiar de color en el picker
    handleChangeComplete = (color) => {
        setColor(color.hex)
    }

    return (
        <div className='container'>
            <div className='colors'>
                <ColorCircle background={color} />
                <ColorCircle background={color} />
                <ColorCircle background={color} />
                <ColorCircle background={color} />
                <ColorCircle background={color} />
            </div>
            <CompactPicker className='color-picker' color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default ColorPicker;
