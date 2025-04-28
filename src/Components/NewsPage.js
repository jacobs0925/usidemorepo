import "../assets/css/NewsPage.css"
import NavBar from "./NavBar"
import SideBySide from "./SideBySide"
import usifees from "../assets/usifees.png"
import WideBanner from "./WideBanner"
import rsobanner from "../assets/rsobanner.png"
import cocorep from "../assets/cocorep.webp"
import expertlogo from "../assets/expertlogo.webp"
import pattyslogo from "../assets/pattyslogo.webp"
import twoalogo from "../assets/2alogo.webp"
import threatlogo from "../assets/threatlogo.webp"
import kingslogo from "../assets/kingslogo.webp"
import paladinlogo from "../assets/paladinlogo.webp"
import valleylogo from "../assets/valleylogo.webp"
import bluelogo from "../assets/bluelogo.webp"
import Membership from "./Membership"
import baypointlogo from "../assets/baypointlogo.png"
import brentwoodlogo from "../assets/brentwoodlogo.png"
import concordlogo from "../assets/concordlogo.png"
import walnutcreeklogo from "../assets/walnutcreeklogo.png"
import diablologo from "../assets/diablologo.png"
import VedusBanner from "./VedusBanner"
import grouphoto from "../assets/usibunkers.webp"
import CustomSmallButton from "./CustomSmallButton"
import logo from '../assets/logo.png'
import Footer from "./Footer"
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
const membershipItems =
    [
        {
            src: baypointlogo,
            name: "Bay Point",
            href: "https://baypointrodandgun.com/wp-content/uploads/2014/04/Bay-Point-Rod-and-Gun-Club_app_rev.pdf"
        },
        {
            src: brentwoodlogo,
            name: "Brentwood",
            href: "https://members.brentwoodrodandgunclub.com/signup"
        },
        {
            src: concordlogo,
            name: "Concord",
            href: "https://concordsportsmen.com/wp-content/uploads/2018/02/2017-Associate-Member-Application.pdf"
        },
        {
            src: walnutcreeklogo,
            name: "Walnut Creek",
            href: "https://walnutcreeksportsmen.com/membership/"
        },
        {
            src: diablologo,
            name: "Diablo",
            href: "http://diablorodandgun.com/memberships/"
        },
    ]

const NewsPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="pagecontainer">
                <Membership items={sponsorItems} className={'sponsorlist'} wideIcons={true} header={"Sponsors"} subheader={"The following is a listing of sponsors that have supported United Sportsmen Inc."}></Membership>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default NewsPage;