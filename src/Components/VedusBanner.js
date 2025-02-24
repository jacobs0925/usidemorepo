import '../assets/css/VedusBanner.css';
import '../assets/fonts/fonts.css'

const VedusBanner = ({ image, children, textHeader, textSubHeader, flipImage = false, flipText = false, buttons = [] }) =>
{
    const imageClass = flipImage ? 'banner-img flip-image' : 'banner-img';

    return (
        <div className="banner-container">
            <img src={image} className={imageClass} alt="banner" />
            <div className="text-container">
                <div className='text-bubble'>
                    <div className='text-bubble-content'>
                        <div className='text-header-container'>
                            <div className='text-header'>{textHeader}</div>
                            <div className='text-subheader'>{textSubHeader}</div>
                        </div>
                        <div className='text-content'>{children}</div>
                        {buttons.length > 0 ?
                            <div className='button-container'> {buttons}</div> :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VedusBanner;
