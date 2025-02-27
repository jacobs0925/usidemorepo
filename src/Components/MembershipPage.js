import NavBar from "./NavBar"
import Membership from "./Membership"
import "../assets/css/MembershipPage.css"
import baypointlogo from "../assets/baypointlogo.png"
import brentwoodlogo from "../assets/brentwoodlogo.png"
import concordlogo from "../assets/concordlogo.png"
import walnutcreeklogo from "../assets/walnutcreeklogo.png"
import diablologo from "../assets/diablologo.png"

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

const MembershipPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="pagesectioncontainer">
                <Membership items={membershipItems} imagelistheader={"Membership Applications:"} header={"Membership & Club Information"} subheader={"United Sportsmen Incorporated is owned and operated by five clubs: the Bay Point Rod and Gun Club, the Brentwood Rod and Gun Club, the Concord Sportsmen's Club, the Diablo Rod and Gun Club, and the Walnut Creek Sportsmen's Club. Each club hosts a wide variety of recreational shooting and social events throughout the year. As a member in any one (or more) of the five clubs, you are eligible to purchase an annual “discount card” for shoot fees,  ammo and shooting supplies."}></Membership>
            </div>

        </div>
    )
}

export default MembershipPage