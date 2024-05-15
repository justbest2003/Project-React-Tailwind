import React, {useState} from "react";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }
    
    return( <div className="color-picker-container flex flex-col items-center">
                <h1 className="m-12 text-5xl font-bold">Color Picker</h1>
                <div className="color-display w-80 h-80 flex justify-center items-center border-4 border-solid border-gray-300 rounded-3xl mb-6 transition duration-250 ease-in-out" style={{backgroundColor: color}}>
                    <p className="text-gray-800 text-4xl text-center">Selected Color: {color}</p>
                </div>
                <label className="text-lg font-bold mb-4">Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange} className="w-20 h-14 p-1 rounded-lg border-2 border-gray-300" />
            </div>);
    
}

export default ColorPicker