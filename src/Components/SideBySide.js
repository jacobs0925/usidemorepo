import React from "react"
import "../assets/css/SideBySide.css"

const SideBySide = ({ reverse = false, style, children }) =>
{
    return (
        <div
            style={style} 
            className={`locationsectioncontent${reverse ? ' isreversed' : ''}`}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    className: `${child.props.className || ''} sidebysidepanel`.trim(),
                })
            )}
        </div>
    )
}

export default SideBySide