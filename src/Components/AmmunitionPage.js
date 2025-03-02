import "../assets/css/AmmunitionPage.css"
import NavBar from "./NavBar"
import VedusBanner from "./VedusBanner"
import bannerimg from '../assets/range.webp'
import CustomSmallButton from "./CustomSmallButton"
import SideBySide from "./SideBySide"
import ammoinfo from "../assets/ammoinfo.webp"
import Footer from "./Footer"
const AmmunitionPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <VedusBanner flipImage={false} image={bannerimg} textRight={true} textHeader={"Ammunition Purchase"} buttons={[
                <CustomSmallButton wide={true} big={true} text="Ammunition Purchase Agreement"></CustomSmallButton>,
                <CustomSmallButton wide={true} big={true} text="CRPA Ammo Flowchart" invert={true}></CustomSmallButton>,
            ]}>
                U.S.I. ammunition quantities vary based on the current shortages and supply issues. Due to high demand, we may have inventory shortages.<br /><br />
                California's Ammunition Background Check Requirement law is still in effect. Additionally, California has instituted an 11% excise tax on ammunition and firearms.<br /><br />
                There is litigation pending that is challenging the constitutionality of this tax, but until resolved USI must collect and remit it to the State of California.
            </VedusBanner>
            <div className="ammunitionpagesection">
                <SideBySide reverse={true} >
                    <img src={ammoinfo} alt={'alt'}></img>
                    <div className="ammocolumn">
                        <div className="ammocontents">
                            <span className="bolded text-header">How can I buy Ammunition?</span><br /><br />
                            <span className="bolded">Step 1:</span><br />Submit external ammo purchase agreement to: Asstmanager@unitedsportsmen.com.<br />
                            <CustomSmallButton style={{ marginTop: '.5em' }} wide={true} small={true} text="Ammunition Purchase Agreement" invert={false}></CustomSmallButton> <br />
                            <span className="bolded">Step 2:</span><br />Order ammunition from outside vendor, if necessary, have them contact: Asstmanager@unitedsportsmen.com to obtain a copy of USI's ammo vendor license, or provide them with the attached copy if they will accept it.<br /><br />
                            <span className="bolded">Step 3:</span><br />Send a copy of the invoice to Asstmanager@unitedsportsmen.com.<br /><br />
                            <span className="bolded">Step 4:</span><br />Once your ammo is delivered you can pick it up at the clubhouse anytime the clubhouse is open.<br /><br />
                            <span className="bolded">Step 5:</span><br />The State of California has instituted background checks and a new 11% excise tax that we must collect at the time of delivery. You must have a copy of the invoice in order to pick up your ammunition.<br /><br />
                            <span className="bolded">What ammunition eligibility check should I use?</span>
                            <CustomSmallButton style={{ marginTop: '.5em' }} wide={true} small={true} text="CRPA Ammo Flowchart" invert={false}></CustomSmallButton> <br />
                        </div>
                    </div>
                </SideBySide>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AmmunitionPage