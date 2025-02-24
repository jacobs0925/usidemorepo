import { useState } from 'react';
import '../assets/fonts/fonts.css'

const CustomButton = ({ onPress, text, invert = false }) =>
{
    const [invertParam, setInvertParam] = useState(invert)
    const buttonStyle = {
        ...styles.buttonStandard,
        ...(invertParam ? styles.invertButton : styles.button),
    };

    const textStyle = {
        ...styles.buttonTextStandard,
        ...(invertParam ? styles.invertButtonText : styles.buttonText),
    };
    return (
        <div style={buttonStyle} onClick={onPress} onMouseEnter={() => setInvertParam(!invertParam)} onMouseLeave={() => setInvertParam(!invertParam)} >
            <div style={textStyle}>
                {text}
            </div>
        </div>
    )
}

const styles = {
    buttonStandard:{
        borderRadius: '1.5em',
        display: 'flex',
        maxWidth:'7em',
        minWidth: '4em',
        padding: '.7em',
        cursor:'pointer',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTextStandard:{
        fontSize: 16,
        fontFamily:'Poppins'
    },
    button: {
        backgroundColor: '#3880ff',
        border: '2px solid #3880ff',

    },
    buttonText: {
        color: 'white',
    },
    invertButton: {
        backgroundColor: 'white',
        border: '2px solid #3880ff',
    },
    invertButtonText: {
        color: '#3880ff',
    },
};

export default CustomButton