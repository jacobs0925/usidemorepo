import NavBar from "./NavBar"
import VedusBanner from "./VedusBanner"
import CustomButton from "./CustomButton"
import homebanner from "../assets/usifront.webp"
import VedusServices from "./VedusServices"
import Membership from "./Membership"
import baypointlogo from "../assets/baypointlogo.png"
import brentwoodlogo from "../assets/brentwoodlogo.png"
import concordlogo from "../assets/concordlogo.png"
import walnutcreeklogo from "../assets/walnutcreeklogo.png"
import diablologo from "../assets/diablologo.png"
import rsobanner from "../assets/rsobanner.png"
import WideBanner from "./WideBanner"
import cocorep from "../assets/cocorep.webp"
import expertlogo from "../assets/expertlogo.webp"
import pattyslogo from "../assets/pattyslogo.webp"
import twoalogo from "../assets/2alogo.webp"
import threatlogo from "../assets/threatlogo.webp"
import kingslogo from "../assets/kingslogo.webp"
import paladinlogo from "../assets/paladinlogo.webp"
import valleylogo from "../assets/valleylogo.webp"
import bluelogo from "../assets/bluelogo.webp"
import Footer from "./Footer"

const HomePage = () =>
{

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
    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <VedusBanner image={homebanner} flipImage={false} textRight={null} textHeader={'United Sportsmen Incorporated'} textSubHeader={"Northern California's Finest Multi Purpose Shooting Facility"} buttons={[
                <CustomButton text="Join Us"></CustomButton>,
                <CustomButton text="Our Ranges" invert={true}></CustomButton>,
                <CustomButton text="Need Ammo?" invert={true}></CustomButton>
            ]}>
                United Sportsmen is open to the public for rifle and pistol shooting,  trap, skeet, air gun, <br />
                and archery. U.S.I. is owned  and operated by five local gun clubs, and memberships are available! <br />
                Our rifle and pistol ranges are all newly remodeled, and all our facilities are well maintained<br />
                to provide all members and guests a very special place to enjoy your shooting sport.<br />
            </VedusBanner>

            <VedusServices header={"Our Ranges"}></VedusServices>

            <div>
                <Membership items={membershipItems} imagelistheader={"Membership Applications:"} header={"Membership & Club Information"} subheader={"United Sportsmen Incorporated is owned and operated by five clubs: the Bay Point Rod and Gun Club, the Brentwood Rod and Gun Club, the Concord Sportsmen's Club, the Diablo Rod and Gun Club, and the Walnut Creek Sportsmen's Club. Each club hosts a wide variety of recreational shooting and social events throughout the year. As a member in any one (or more) of the five clubs, you are eligible to purchase an annual “discount card” for shoot fees,  ammo and shooting supplies."}></Membership>
                <WideBanner src={rsobanner} alt={'fuck'} header={'The United Sportsmen Range is Looking for Volunteers'} subheader={'Simply Working Two, 4-hour Shifts Monthly, is all that is necessary after a NRA RSO Course and you can shoot for free*'} content={'Once you become an NRA RSO (5100 Refundable Class). with a current certification, you will receive: An orientation to be a USI RSO for the public ranges. Free shooting during all open hours on the range(s) you work. Your tokens will be required for Trap and Skeet, But you get them at employee/volunteer discounted prices! Free shooting on Mondays. Tuesdays and after hours when the range is not open to the public.'}></WideBanner>
                <Membership items={sponsorItems} className={'sponsorlist'} wideIcons={true} header={"Sponsors"} subheader={"The following is a listing of sponsors that have supported United Sportsmen Inc."}></Membership>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default HomePage