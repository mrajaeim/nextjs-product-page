import React from 'react';
import useColorPicker from "../../zustands/useColorPicker";

const ColorPicker: React.FC<{ color: string }> = ({color}) => {
    const colorPicker = useColorPicker();
    return <span className={"mr-2"}>
        <span
            className={"cursor-pointer inline-block p-[2px] rounded-full bg-white flex justify-center items-center w-fit"}
            style={{border: colorPicker.color == color? "2px solid " + color : "none"}}
            onClick={()=>{colorPicker.changeColor(color)}}
        >
            <span className={"inline-block p-2 rounded-full"} style={{background: color}}/>
        </span>
    </span>
}

export default ColorPicker