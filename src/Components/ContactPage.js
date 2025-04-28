import "../assets/css/ContactPage.css"
import CustomSmallButton from "./CustomSmallButton";
import NavBar from "./NavBar"
import { useState } from "react";
import contactusimg from "../assets/owners.webp"
import cocorep from "../assets/cocorep.webp"
import expertlogo from "../assets/expertlogo.webp"
import pattyslogo from "../assets/pattyslogo.webp"
import twoalogo from "../assets/2alogo.webp"
import threatlogo from "../assets/threatlogo.webp"
import kingslogo from "../assets/kingslogo.webp"
import paladinlogo from "../assets/paladinlogo.webp"
import valleylogo from "../assets/valleylogo.webp"
import bluelogo from "../assets/bluelogo.webp"
import Membership from "./Membership";
import Footer from "./Footer";

const boardmembers = [
    {
        "clubname": "Bay Point Rod and Gun Club",
        "name": "Ed Collins",
        "email": "president@baypointrodandgunclub.com"
    },
    {
        "clubname": "Diablo Rod and Gun Club",
        "name": "Dennis Winslow",
        "email": "president@diablorodandgun.com"
    },
    {
        "clubname": "Brentwood Rod and Gun Club",
        "name": "Seamus Hodgin",
        "email": "president@bwrgc.com"
    },
    {
        "clubname": "Concord Sportsmen's Club",
        "name": "Mike McIntosh",
        "email": "president@concordsportsmen.com"
    },
    {
        "clubname": "Walnut Creek Sportsmen's Club",
        "name": "Roland McCoy",
        "email": "president@walnutcreeksportsmen.com"
    }
]

const sponsorItems =
        [
            {
                src: cocorep,
                name: "Contra Costa Republican Party",
                subheader: "Contact CoCoRepublicans.com",
                href: "https://www.cocorepublicans.com/"
            },
            {
                src: expertlogo,
                name: "Expert Firearms Training LLC",
                subheader: "Contact Roy Bryson",
                href: "https://expertfirearmstrainingllc.com/"
            },
            {
                src: pattyslogo,
                name: "Patt's Original Cheese Zombies",
                subheader: "Contact Robert May",
                href: "https://www.pattysoriginalcheesezombies.com/"
            },
            {
                src: twoalogo,
                name: "2nd Amendment Firearms",
                subheader: "Contact Doug Kevilus",
                href: "https://www.2afirearmsacademy.com/"
            },
            {
                src: threatlogo,
                name: "Threat Scenarios",
                subheader: "Contact Brian Brisco",
                href: "https://threatscenarios.com/"
            },
            {
                src: kingslogo,
                name: "Kings Customs Cerekote and Engraving",
                subheader: "Contact Nick Hallin",
                href: "https://www.instagram.com/kingscustomscerakote/?hl=en"
            },
            {
                src: paladinlogo,
                name: "Paladin Tactical",
                subheader: "Contact Dan Butler",
                href: "https://www.paladin-tactical-us.com/"
            },
            {
                src: valleylogo,
                name: "Valley Defensive Solutions",
                subheader: "Contact Moray Cross",
                href: "https://www.valleydefensivesolutions.com/"
            },
            {
                src: bluelogo,
                name: "Blue Star HVAC",
                subheader: "Contact Jeff Scalier",
                href: "https://bluestarhvac.com/"
            },
        ]

const BoardMember = ({ name, email, clubname }) =>
{

    return (
        <div className="boardmember">
            <div className="clubname">{clubname}</div>
            <div className="membername">{name}</div>
            <div className="memberemail">{email}</div>
        </div>
    )
}

const ContactPage = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [recipient, setRecipient] = useState('');

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="contactpagesection">
                <div className="flexrow contactparentrow">
                    <div className="flexcolumn">
                        <div className="flexcolumn flexcenter contactcolumn">
                            <div className="clubname">
                                Call us: <br/>
                                925-676-1987

                            </div>
                            <div className="clubname">
                                USI does not rent guns or give lessons, however
                                we have a list of Authorized Instructors shown on
                                the “Instructors” page

                            </div>
                            <div className="flexrow flexcenter contactrow">
                                <div className="flexrow flexcenter">
                                    Membership Information: Click HERE<br />
                                    Hunter Education Information: Click HERE<br />

                                </div>
                                <div className="flexrow flexcenter">
                                    Terms of Service - Click HERE<br />
                                    Privacy Policy - Click HERE
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
            <div className="contactpagesection">
                <div className="contactpagecontent">
                    <div className="contact-form">
                        <div className="text-header">Send Us a Message:</div>
                        <div class="was-validated">
                            <div className="formlabel">Your Name</div>
                            <div value={name}
                                onChange={(e) => setName(e.target.value)} className="input-group mb-3 name-field">
                                <input type="text" class="form-control" required placeholder="Name" aria-describedby="basic-addon1" />
                            </div>
                            <div className="formlabel">Your Email</div>
                            <div class="input-group mb-3 name-field">
                                <input placeholder="Email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required type="text" class="form-control" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                            <div className="formlabel">Subject</div>
                            <div value={subject}
                                onChange={(e) => setSubject(e.target.value)} className="input-group mb-3 email-field">
                                <input type="text" class="form-control" required placeholder="Subject" aria-describedby="basic-addon1" />
                            </div>
                            <div className="formlabel">Who would you like to receive your message?</div>
                            <select required value={recipient}
                                onChange={(e) => setRecipient(e.target.value)} class="form-select selectorinput" aria-label="Default select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className="formlabel">Your Message</div>
                            <textarea placeholder="Message" required value={message}
                                onChange={(e) => setMessage(e.target.value)} class="form-control messageinput" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <CustomSmallButton small={true} text={'Send'}></CustomSmallButton>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ContactPage