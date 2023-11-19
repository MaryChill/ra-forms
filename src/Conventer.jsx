import { useState } from 'react';

const Conventer = () => {
    const [color, setColor] = useState('#000000')

    const regexp = /#[a-f0-9]{6}\b/gi;

    const colorChange = (event) => {
            setColor(event.target.value);
    }

    // let backgroundColor = {
    //     "background-color": color
    // }



    const checkColor = (color) => {
        console.log(color.match(regexp))
       // color =
        
       // backgroundColor = '#ff0000'
       // color.match(regexp) === null ? backgroundColor["background-color"] = '#ff0000' : backgroundColor["background-color"] = color
    }
    // if(color.match(regexp) === null) {
    //     setColor('#ff0000')
    // } else {
    //     setColor(event.target.value);
    // }

    const hexToRGB = (color) =>{
        var r = parseInt(color.slice(1, 3), 16),
            g = parseInt(color.slice(3, 5), 16),
            b = parseInt(color.slice(5, 7), 16);
            return "rgb(" + r + ", " + g + ", " + b + ")";
    }
// console.log(backgroundColor["background-color"])

    return (
        <div className="box" style={{backgroundColor: color}}>
            <div className="color-choice" >
                <label htmlFor="color">{hexToRGB(color)}</label>
                <input type="text" 
                id="color" name="color"
                value={color}
                onChange={(event)=>{colorChange(event)}}/>
            </div>
        </div> 

    )
}
export default Conventer;