import React, { useState, handleChangeComplete } from 'react';
import { CompactPicker } from 'react-color';
import "./styles/colorpicker.css"
import ColorCircle from './colorCircle';


const Colorpicker = () => {
    const [background, setBackground] = useState("fff");


    //BUG: Hay que clickar 2 veces para que cambie el color
    handleChangeComplete = (color) => {
        setBackground(color.hex)
    }




    return (
        <div className='container'>
            <div className='colors'>
                <div>
                    <ColorCircle background={background} />
                </div>
                <div>
                    <ColorCircle background={background} />
                </div>
                <div>
                    <ColorCircle background={background} />
                </div>
                <div>
                    <ColorCircle background={background} />
                </div>
                <div>
                    <ColorCircle background={background} />
                </div>

            </div>
            <CompactPicker className='color-picker' color={background}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
};

export default Colorpicker;
