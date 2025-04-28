import "../assets/css/WaiverPage.css"
import NavBar from "./NavBar"
import SideBySide from "./SideBySide"
import CustomSmallButton from "./CustomSmallButton"
import Footer from "./Footer"

const firstlist = <ul>
    <li>The Range Master and Chief Range Safety Officer on duty exercises control over all personnel using this range.</li>
    <br />
    <li>Uncased firearms are never allowed behind the firing line. Cases should remain closed and locked until such time as you are at the firing line.</li>
    <br />
    <li>Firearms on the firing line must be pointed downrange at all times.</li>
    <br />
    <li>No concealed weapons may be carried and no holstered firearms may be worn on this range.</li>
    <br />
    <li>Rapid fire is not permitted. Two seconds between shots.</li>
    <br />
    <li>No handguns permitted on the 100 yd range without Range Manager approval.</li>
    <br />
    <li>Incendiary, steel core, and tracer ammunition is prohibited.</li>
    <br />
    <li>Slugs and sabots only allowed in shotguns.</li>
    <br />
    <li>Minors under 10 years old and non-paying spectators are not permitted on the range.</li>
    <br />
    <li>A legal guardian or parent, 18 years or older, must supervise minors under 18 years of age.</li>
    <br />
    <li>Wearing eye and ear protection is mandatory while on the shooting range.</li>
    <br />
    <li>All alcoholic beverages and controlled substances are prohibited on the property. Those believed to be under the influence will be asked to leave.</li>
    <br />
    <li>All persons entering the shooting range must register in the range office and pay the appropriate shooting fee.</li>
    <br />
    <li>All firearms must be carried in absolute safety, meaning in a closed lockable case until you are on the firing line and the range is clear.</li>
    <br />
    <li>After registration and donning eye and ear protection, you may proceed to your assigned lane and prepare your equipment while firing is going on.
        <ul>
            <li>If you enter the shooting area during a ceasefire, you must stand behind the yellow line until the range is clear or go downrange to post your target.</li>
            <br />
            <li>All equipment must remain behind the safety line.</li>
        </ul>
    </li>
    <br />
    <li>Obey all range commands at once. If you are not sure of what to do, stop, freeze, and wait for instructions.</li>
    <br />
    <li>You may shoot at authorized targets only. Cans, bottles, silhouettes, etc., may not be used as targets. Do not shoot at wildlife.</li>
    <br />
    <li>All exposed firearms on the benches must have their actions locked open, magazines removed, chambers unloaded and clear, and slides locked back.
        <ul>
            <li>All firearms must have chamber flags inserted with muzzles pointed downrange at all times.</li>
        </ul>
    </li>
    <br />
    <li>All persons not going downrange to change targets must remain behind the yellow line during the ceasefire. Do not approach or handle anything on the benches during a ceasefire.</li>
    <br />
    <li>No handling or cleaning of firearms is allowed behind the red line.</li>
    <br />
    <li>Any person observing any violation of these rules or any dangerous situation is to notify a Range Safety Officer at once. If you see something, say something.</li>
    <br />
    <li>Creating a disturbance or violating any rule will result in loss of range privileges.</li>
    <br />
    <li>Never climb any vegetation area.</li>
</ul>


const secondlist = <ul>
    <li>No alcohol is permitted anywhere except on the USI Clubhouse patio, and only after shooters have completed their day’s shooting. Shooters having consumed alcohol will not be permitted to shoot again that day, no exceptions.</li>
    <br />
    <li>Eye and ear protection is required for all shooters and observers inside the fence.</li>
    <br />
    <li>
        Keep gun actions open.
        <ul>
            <li>Over-and-under or side-by-side gun actions must remain open except when the gun is racked, cased, or when the shooter is on station.</li>
            <br />
            <li>Pump action and autoloaders must have actions open except when the gun is cased or shooters are on station and ready to shoot.</li>
        </ul>
    </li>
    <br />
    <li>Carry guns to or from the fields or between stations with muzzles pointed down or straight up. Never point a gun at a person. Do not carry a gun over the shoulder so as to point muzzles toward the clubhouse or others.</li>
    <br />
    <li>At the discretion of a squad leader and puller, shooters may position themselves at any distance, 16 to 27 yards. However, there may be no more than a 2-yard differential between shooters.</li>
    <br />
    <li>When on station, guns may be loaded only with one shell unless the type of shooting requires two shells.</li>
    <br />
    <li>Once on station, keep the gun pointed downrange at all times.</li>
    <br />
    <li>Before leaving a station, gun actions must be open and clear. At no time may a shooter leave a station with a loaded gun.</li>
    <br />
    <li>Only shells with shot size 7½, 8, 8½, or 9 are allowed.</li>
    <br />
    <li>Never point guns downrange when someone is downrange.</li>
    <br />
    <li>No handling firearms when the safety cone is on top of the trap house.</li>
    <br />
    <li>No handling firearms unless on stations.</li>
</ul>

const WaiverPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="waiverpagecontainer">
                <div className="bannerHeader">USI Waiver Information</div>
                <div className="waivertextbox">
                    United Sportsmen Inc. requires all members and guests visiting our range to have a signed “Liability Waiver” on file prior to being allowed to use our ranges.
                    The waivers are available on-line (link below) allowing you to complete the waivers prior to arriving at the range.
                    Tablets are also available for you to sign-up at the range office. The waiver is required for all Adults and Minors.<br /><br />
                    Prior to reviewing and signing the waiver, customers are required to watch the safety briefing and familiarization videos so you will know what to expect when
                    you come to the range.  Additionally, there will be a short quiz at the end of the waiver covering the content of the videos and our range rules.
                </div>
                <SideBySide style={{ 'justifyContent': 'space-between' }}>
                    <iframe class=" lazyloaded" title="Firearm Safety First, Last, Always | NSSF" width="500" height="281" data-src="https://www.youtube.com/embed/chMQqClsLMQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" src="https://www.youtube.com/embed/chMQqClsLMQ?feature=oembed"></iframe>
                    <iframe class=" lazyloaded" title="United Sportsmen Safety Video" width="500" height="281" data-src="https://www.youtube.com/embed/4QkyHRHZSuk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" src="https://www.youtube.com/embed/4QkyHRHZSuk?feature=oembed"></iframe>
                </SideBySide>
                <div className="waivertextbox">
                    When you arrive at the range you will be issued a new U.S.I. Range Card after we have verified completion of your waiver.  This card will replace the older “Yellow”, “Blue”
                    and “Purple” cards for all activities. The different waivers for Skeet/Trap and Rifle/Pistol will be tracked within our systems.  If you plan to shoot both, please review and sign both waivers.<br /><br />
                    The “Liability Waiver” is a <div className="bolded">bi-annual</div> requirement.  “Liability Waivers” for minors MUST be completed and signed by a Parent or Legal Guardian ONLY.
                </div>
            </div>
            <div className="waiverpagecontainer">
                <div className="rulescontainer">
                    <div style={{ gap: '2em' }} className="rulesheaders">
                        <div className="ruleheader">Rifle/Pistol Range Rules & Procedures</div>
                        <div className="ruleheader">Skeet/Trap Range Rules</div>
                    </div>
                    <div className="flexrow" style={{gap: '2em'}}>
                        <div className="rulecolumn rulescontent">
                            {firstlist}
                        </div>
                        <div className="rulecolumn rulescontent">
                            {secondlist}
                        </div>
                            
                    </div>
                    <CustomSmallButton style={{ margin: '2em 0'}} wide={true} big={true} text="Sign Waiver Here" invert={false}></CustomSmallButton>
                    <div className="rulesfootertext">Failure to adhere to these rules may be cause for denying shooters access to USI shooting fields and facilities.
                        If you are a new shooter, ask your puller for assistance in shooting the course.</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default WaiverPage