import "../assets/css/ImageList.css"

const ImageList = ({ items, className, wide = false, big = false }) =>
{

    return (
        <div className={`imagelist ${className || ""}`.trim()}>
            {items.map(item => <ImageItem wide={wide} big={big} item={item}></ImageItem>)}
        </div>
    )
}

const ImageItem = ({ item, wide = false, big = false }) =>
{

    return (
        <div className={"imagelistitem" + (wide ? " wide " : "")}>
            <img className={"imagelisticon" + (big ? " big " : "")} src={item.src} alt={item.name} />
            <div className="imagesubtitle">{item.name}</div>
            {item.subheader !== null ? <div className="imagesubheader">{item.subheader}</div> : null}
        </div>
    )
}

const Membership = ({ header, subheader, imagelistheader, className, items, wideIcons=false, bigIcons=false }) =>
{

    return (
        <div className="membershipcontainer">
            <div className="membershipcontent">
                <div className="membershipheader">{header}</div>
                <div className="membershipsubheader">{subheader}</div>
                <div className="membershipheader">{imagelistheader}</div>
                <ImageList className={className} wide={wideIcons} big={bigIcons} items={items}></ImageList>
            </div>
        </div>
    )
}

export default Membership