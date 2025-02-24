import "../assets/css/WideBanner.css"

const WideBanner = ({ src, alt, header, subheader, content }) =>
{

    return (
        <div className="bannerContainer">
            <img className="bannerImage" src={src} alt={alt}>
            </img>
            <div className="bannerText">
                <div className="bannerHeader">{header}</div>
                <div className="bannerSubheader">{subheader}</div>
                <div className="bannerContent">{content}</div>
            </div>
        </div>
    )
}

export default WideBanner