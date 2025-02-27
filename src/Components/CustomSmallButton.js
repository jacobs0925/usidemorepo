import { useState } from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/CustomSmallButton.css';

const CustomSmallButton = ({ onPress, text, style, invert = false, small = false, wide = false, big=false }) =>
{
    const [isInverted, setIsInverted] = useState(invert);

    return (
        <div
            className={`custom-button ${isInverted ? 'inverted' : ''} ${small ? 'smallbutton' : ''} ${wide ? 'widebutton' : ''}  ${big ? 'bigbutton' : ''}`.trim()}
            style={style}
            onClick={onPress}
            onMouseEnter={() => setIsInverted(!isInverted)}
            onMouseLeave={() => setIsInverted(!isInverted)}
        >
            {text}
        </div>
    );
}

export default CustomSmallButton;
