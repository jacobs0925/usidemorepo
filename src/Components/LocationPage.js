import NavBar from "./NavBar"
import React from "react"
import { rifleServiceData, trapServiceData } from "./ServiceData"
import "../assets/css/LocationPage.css"
import usifees from "../assets/usifees.png"

const SideBySide = ({ reverse = false, children }) =>
{
    return (
        <div className={`locationsectioncontent${reverse ? ' isreversed' : ''}`}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    className: `${child.props.className || ''} sidebysidepanel`.trim(),
                })
            )}
        </div>
    )
}

const columnData = 
[
    {
        "MLK Day": "Closed",
        "President's Day": "Closed",
        "Memorial Day": "Closed",
        "July 4th": "Closed",
        "Labor Day": "Closed",
        "Columbus Day": "Closed",
        "Veteran's Day": "Open",
        "Thanksgiving": "Closed",
        "Christmas": "Closed",
        "New Years Day": "Closed",
    }
]

const ColumnBlock = ({items, name1, name2}) =>
{

    return (
        <div className="columnblock">
            <div className="column">
                <div className="columnheader">{name1}</div>
                <div className="columncontents">
                    {/* {Object.entries(service.pricing).map(([key, value]) => (value != null ?
                        <div className="priceitem service-text" key={key}>{key === 'public' ? 'Public (non-VIP)' : key}: ${value}</div> : null
                    ))} */}
                </div>
            </div>
            <div className="column">
                <div className="columnheader">{name2}</div>
                <div className="columncontents">

                </div>
            </div>
        </div>
    )
}

const LocationPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="locationpagesection">
                <SideBySide>
                    <img src={'https://unitedsportsmen.com/wp-content/uploads/2019/01/USI-Map3.jpg'} alt={'test'}></img>
                    <div className="paneltextblock">
                        <div className="panelsubheader">Our Address:</div>
                        <span>United Sportsmen Incorporated
                            4700 Evora Road
                            Concord, California 94520</span>
                        <span className="bolded">Please sign-in one hour prior closing time to ensure you will have
                            enough time for your rounds of trap or skeet - all shooting stops
                            at the posted closing times</span>
                        <span>Trap and Skeet ranges CLOSED on Monday and Tuesdays</span>
                        <span>USI does not rent guns.
                            Firearms instruction is available - visit our list of Authorized Instructors shown on the “Instructors” page</span>
                    </div>
                </SideBySide>
            </div>

            <div className="locationpagesection">
                <SideBySide>
                    <img src={'https://unitedsportsmen.com/wp-content/uploads/2019/01/USI-Map3.jpg'} alt={'test'}></img>
                    <ColumnBlock items={columnData} name1={'Holiday'} name2={'Trap/Skeet'}></ColumnBlock>
                </SideBySide>
            </div>

            <div className="locationpagesection">
                <SideBySide reverse={true}>
                    <img src={usifees} alt={'test'}></img>
                    <div className="paneltextblock smalltext centertext">
                        The U.S.I. "VIP program" is available for our frequent participants and those that wish to support U.S.I.'s mission to provide the finest and most diverse shooting sports facility in the Bay Area. The V.I.P. card is only available to members of one or more of the 5 clubs and is valid for one year from the date of.purchase. The V.I.P. card allows holders to pay discounted rates on ammunition and range use. If you shoot more than 5 rounds on the shotgun fields a month, or more than once a month on the Rifle Pistol range, you will save money with the V.I.P. card. Discounted rates also apply at the MPR and A/P ranges. The V.I.P. card is now $250.00 and can be purchased at the Rifle-Pistol office or the Clubhouse. If you are not a member of one of the clubs please visit the U.S.I. website for membership information.
                    </div>
                </SideBySide>
            </div>
        </div>
    )
}

export default LocationPage