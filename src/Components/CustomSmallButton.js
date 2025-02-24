import { useState } from 'react';
import '../assets/fonts/fonts.css';
import '../assets/css/CustomSmallButton.css';

const CustomSmallButton = ({ onPress, text, invert = false }) =>
{
    const [isInverted, setIsInverted] = useState(invert);

    return (
        <div
            className={`custom-small-button ${isInverted ? 'inverted' : ''}`}
            onClick={onPress}
            onMouseEnter={() => setIsInverted(!isInverted)}
            onMouseLeave={() => setIsInverted(!isInverted)}
        >
                {text}
        </div>
    );
}

export default CustomSmallButton;
