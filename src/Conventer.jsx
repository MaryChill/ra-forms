import { useState } from 'react';

export default function Converter() {
    const [hex, setHex] = useState('#000000');
    const [rgb, setRgb] = useState('rgb(0, 0, 0)');

    function checkHex(hex) {
        const hexRegex = /^#?([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/
        if (hexRegex.test(hex)) {
            hexToRGB(hex);
        } else {
            setRgb ('Ошибка!')
        }
    }

    function hexToRGB(hex) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (hex) {
            setRgb("rgb(" + r + ", " + g + ", " + b + ")");
        } 
    }

    const handleHexChange = evt => {
        const { value } = evt.target;
        setHex(value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (checkHex(hex)) {
            handleHexChange(evt);
        }
    }

    return (
        <div className="box" style={rgb === 'Ошибка!'? {backgroundColor: 'red'} : {backgroundColor: rgb}}>
            <form className="color-choice" onSubmit={handleSubmit}>
                <label htmlFor="color">{rgb}</label>
                <input className="color" type="text" id="color" value={hex} minLength={7} maxLength={7} onChange={handleHexChange} />
            </form>
        </div>
    );
}