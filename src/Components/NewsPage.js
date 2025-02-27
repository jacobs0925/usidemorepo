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
            <VedusBanner flipImage={true} textRight={true} textSubHeader={'USI Waiver'} buttons={[<CustomSmallButton wide={true} big={true} text="Sign Waiver" invert={false}></CustomSmallButton>]} image={grouphoto} textHeader={'United Sportsmen News'}>
                United Sportsmen Inc. requires all members and guests visiting our range to have a signed “Liability Waiver” on file prior to being allowed to use our ranges.The waiver is available on-line (link below) which will allow you to complete the “Liability Waiver” prior to arriving at the range. We will also have access available for you to sign-up at the range office. The waiver is required for Adults and Minors. If this will be your first time coming to our range, you will also be given a “safety briefing” and a copy of our range rules. Upon completion, you will be issued a “Safety Card” (yellow for shotgun, purple for rifle/pistol) as proof of completion. KEEP THE SAFETY CARD – you will be asked to show the card each time you visit our range. The “Liability Waiver” is a “one time” requirement. “Liability Waivers” for minors MUST be completed and signed by a Parent or Legal Guardian ONLY.
            </VedusBanner>
            <div className="pagecontainer">
                <div className="feescontainer">
                    <img className="feeslogoimg" src={logo} alt={'usilogo'}></img>
                    <div className="bannerHeader">U.S.I Range Fees & V.I.P. Program</div>
                    <SideBySide reverse={true}>
                        <img className="feesimage" src={usifees} alt={'test'}></img>
                        <div className="paneltextblock smalltext centertext newscustomstyle">
                            The U.S.I. "VIP program" is available for our frequent participants and those that wish to support U.S.I.'s mission to provide the finest and most diverse shooting sports facility in the Bay Area. The V.I.P. card is only available to members of one or more of the 5 clubs and is valid for one year from the date of.purchase. The V.I.P. card allows holders to pay discounted rates on ammunition and range use. If you shoot more than 5 rounds on the shotgun fields a month, or more than once a month on the Rifle Pistol range, you will save money with the V.I.P. card. Discounted rates also apply at the MPR and A/P ranges. The V.I.P. card is now $250.00 and can be purchased at the Rifle-Pistol office or the Clubhouse. If you are not a member of one of the clubs please visit the U.S.I. website for membership information.
                        </div>
                    </SideBySide>
                </div>
            </div>
            <div className="pagecontainer">
                <Membership items={sponsorItems} wideIcons={true} header={"Sponsors"} subheader={"The following is a listing of sponsors that have supported United Sportsmen Inc."}></Membership>
            </div>
            <div className="pagecontainer">
                <WideBanner src={rsobanner} alt={'fuck'} header={'The United Sportsmen Range is Looking for Volunteers'} subheader={'Simply Working Two, 4-hour Shifts Monthly, is all that is necessary after a NRA RSO Course and you can shoot for free*'} content={'Once you become an NRA RSO (5100 Refundable Class). with a current certification, you will receive: An orientation to be a USI RSO for the public ranges. Free shooting during all open hours on the range(s) you work. Your tokens will be required for Trap and Skeet, But you get them at employee/volunteer discounted prices! Free shooting on Mondays. Tuesdays and after hours when the range is not open to the public.'}></WideBanner>

            </div>
            <div className="pagecontainer">
                <Membership items={membershipItems} bigIcons={true} header={"Visit The Club's Website For Their Current Activities"} subheader={"Click The Logo To Go To Club's Website"}></Membership>
            </div>
        </div>
    )
}

export default NewsPage;