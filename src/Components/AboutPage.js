import "../assets/css/NewsPage.css"
import NavBar from "./NavBar"
import SideBySide from "./SideBySide"
import bannerimg from '../assets/range.webp'
import ammoinfo from "../assets/ammoinfo.webp"
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

const AboutPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <VedusBanner flipImage={false} image={bannerimg} textRight={null} textHeader={"Ammunition Purchase"} buttons={[
                <CustomSmallButton wide={true} big={true} text="Outside Ammunition Purchase Agreement"></CustomSmallButton>,
            ]}>
                U.S.I. ammunition quantities vary based on the current shortages and supply issues. Due to high demand, we may have inventory shortages.<br /><br />
                California's Ammunition Background Check Requirement law is still in effect. Additionally, California has instituted an 11% excise tax on ammunition and firearms.<br /><br />
                There is litigation pending that is challenging the constitutionality of this tax, but until resolved USI must collect and remit it to the State of California.
            </VedusBanner>
            <div className="locationpagesection" id="ammunition">
                <SideBySide reverse={true} >
                    <img src={ammoinfo} alt={'alt'}></img>
                    <div className="ammocolumn">
                        <div className="ammocontents">
                            <span className="bolded text-header">How can I buy Ammunition?</span><br /><br />
                            <span className="bolded">Step 1:</span><br />Submit external ammo purchase agreement to: <a href="mailto:Asstmanager@unitedsportsmen.com">Asstmanager@unitedsportsmen.com</a><br />
                            <CustomSmallButton style={{ marginTop: '.5em' }} wide={true} small={true} text="Outside Ammunition Purchase Agreement" invert={false}></CustomSmallButton> <br />
                            <span className="bolded">Step 2:</span><br />Order ammunition from outside vendor, if necessary, have them contact: <a href="mailto:Asstmanager@unitedsportsmen.com">Asstmanager@unitedsportsmen.com</a> to obtain a copy of USI's ammo vendor license, or provide them with the attached copy if they will accept it.<br /><br />
                            <span className="bolded">Step 3:</span><br />Send a copy of the invoice to <a href="mailto:Asstmanager@unitedsportsmen.com">Asstmanager@unitedsportsmen.com</a><br /><br />
                            <span className="bolded">Step 4:</span><br />Once your ammo is delivered you can pick it up at the clubhouse anytime the clubhouse is open.<br /><br />
                            <span className="bolded">Step 5:</span><br />The State of California has instituted background checks and a new 11% excise tax that we must collect at the time of delivery. You must have a copy of the invoice in order to pick up your ammunition.<br /><br />
                        </div>
                    </div>
                </SideBySide>
            </div>
            <div className="locationpagesection" id="sponsors">
                <Membership items={sponsorItems} className={'sponsorlist'} wideIcons={true} header={"Sponsors"} subheader={"The following is a listing of sponsors that have supported United Sportsmen Inc."}></Membership>
            </div>
            <div className="locationpagesection" id="membership">
                <Membership items={membershipItems} imagelistheader={"Club Websites:"} header={"Membership & Club Information"} subheader={"United Sportsmen Incorporated is owned and operated by five clubs: the Bay Point Rod and Gun Club, the Brentwood Rod and Gun Club, the Concord Sportsmen's Club, the Diablo Rod and Gun Club, and the Walnut Creek Sportsmen's Club. Each club hosts a wide variety of recreational shooting and social events throughout the year. As a member in any one (or more) of the five clubs, you are eligible to purchase an annual “discount card” for shoot fees,  ammo and shooting supplies."}></Membership>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default AboutPage;