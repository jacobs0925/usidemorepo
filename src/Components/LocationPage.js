import NavBar from "./NavBar"
import React from "react"
import { rifleServiceData, trapServiceData } from "./ServiceData"
import "../assets/css/LocationPage.css"
import usifees from "../assets/usifees.png"
import SideBySide from "./SideBySide"
import Footer from "./Footer"

const columnData = 
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

const ColumnBlock = ({items, name1, name2}) =>
{

    return (
        <div className="columnblock">
            <div className="column">
                <div className="columnheader">{name1}</div>
                <div className="columncontents">
                    {Object.entries(columnData).map(([key, value]) =>
                        value != null ? <div className="columnitem" key={key}>{key}</div> : null
                    )}
                </div>
            </div>
            <div className="column">
                <div className="columnheader">{name2}</div>
                <div className="columncontents">
                    {Object.entries(columnData).map(([key, value]) =>
                        value != null ? <div className="columnitem" key={`${key}-value`}>{value}</div> : null
                    )}
                </div>
            </div>
        </div>
    );
}

const LocationPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            
            <div className="locationpagesection">
                <SideBySide reverse={true}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6286.480971233728!2d-121.99405332355428!3d38.01817269810112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808567875e997d75%3A0xe8a76702d488093c!2s4700%20Evora%20Rd%2C%20Concord%2C%20CA%2094520!5e0!3m2!1sen!2sus!4v1740611982437!5m2!1sen!2sus"
                        width="380" height="380" style={{ border: 0 }} loading="lazy" ></iframe>
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
                    <div className="paneltextblock">
                        <div className="panelheader">Hours:</div>
                        Trap and Skeet ranges CLOSED on Monday and Tuesdays
                        {rifleServiceData.hours}
                        <div className="panelsubheader">Trap, Skeet, & Five Stand:</div>
                        {trapServiceData.hours}
                    </div>
                    <ColumnBlock items={columnData} name1={'Holiday'} name2={'Trap/Skeet'}></ColumnBlock>
                </SideBySide>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default LocationPage