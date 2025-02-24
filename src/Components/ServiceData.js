const iconSize = 30

const rifleServiceData =
{
    name: "Public Rifle Range",
    details:
        [
            <div className="service-text"> The Public Rifle Range has covered shooting positions for 25, 50 and 100 yard targets. 45 Benches - 6 of which are dual use standing rifle & long distance pistol</div>,
            <div className="service-text">The Public Pistol Range has covered shooting positions up to 50 foot targets. 60 benches</div>
        ],
    hours: [
        <div className="service-text"> 10:00 AM - 4:30 PM  Wednesday thru Friday</div>,
        <div className="service-text"> 9:00 AM - 4:30 PM  Saturday and Sunday</div>,
    ],
    membership: <div className="service-text">{"Open to all"}</div>,
    safety: [
        <div className="service-text">WAIVER & SAFETY ORIENTATION: All new shooters MUST complete the 2020 USI Liability Waiver and watch the Firearm Safety and Range operations videos and complete online test about both videos and general gun safety prior to arriving at USI for your first visit to use Rifle & Pistol Ranges. After check in procedure your first time you will receive a “Blue Card” which shows you have successfully completed the waiver and safety video orientation testing. YOU MUST PRESENT YOUR DRIVE`S LICENCE AND SHOW THIS CARD EVERY TIME YOU SHOOT AT USI. All subsequent visits will be quicker check-in's.</div>,
        <div className="service-text">USI does not rent guns or give lessons, however we have a list of Authorized Instructors shown on the “ Instructors” page.</div>,
        <div className="service-text bolded">EYE AND EAR PROTECTION ARE MANDATORY ON ALL USI RANGES</div>,
        <div className="service-text bolded">Bring your firearms to the range UNLOADED and in a FIREARMS CASE (NOT a backpack or similar) THIS INCLUDES CCW HOLDERS AND OFF-DUTY LAW ENFORCEMENT OFFICERS.</div>,
        <div className="service-text bolded">Firearms should always be transported in accordance with California State Law.(CASES SHOULD BE LOCKABLE WHEN TRANSPORTING).</div>,
        <div className="service-text bolded">NO FIREARMS OF ANY KIND ALLOWED IN HOLSTERS, UNIFORMED LAW ENFORCEMENT EXCEPTED.</div>,
    ],
    pricing:
    {
        public: "25.00",
        vip: "12.00",
        junior: null
    }
}

const trapServiceData =
{
    name: "Trap & Skeet",
    details: [
        <div className="service-text">United Sportsmen has eight (8) lighted shotgun fields for trap and skeet.</div>,
        <div className="service-text">We now have a Clay Delay voice puller available for use on the skeet fields allowing solo practice!</div>,
        <div className="service-text">Shotgun shells, wads, powder, primers, cleaning supplies available</div>,
        <div className="service-text">Our Trap and Skeet fields are lighted for night shooting.</div>
    ],
    hours: [
        <div className="service-text"> 11:00 AM - 6:00 PM  Wednesday thru Thursday</div>,
        <div className="service-text"> 10:00AM - 3:00 PM Friday</div>,
        <div className="service-text"> 10:00AM - 6:00 PM Saturday and Sunday</div>,
    ],
    membership: <div className="service-text">{"Open to all"}</div>,
    safety: [
        <div className="service-text">USI does not rent guns or give lessons, however we have a list of Authorized Instructors shown on the “ Instructors” page.</div>,
        <div className="service-text bolded">EYE AND EAR PROTECTION ARE MANDATORY ON ALL USI RANGES</div>,
        <div className="service-text bolded">Bring your firearms to the range UNLOADED and ENCASED</div>,
    ],
    pricing:
    {
        public: "13.00",
        vip: "9.00",
        junior: "7.50"
    }
}

const standServiceData =
{
    name: "Five Stand",
    details: [
        <div className="service-text">Five Stand is a shotgun sport similar to sporting clays, trap and skeet. There are five stations, or stands and eight strategically placed clay target throwers (called traps). Shooters shoot in turn at various combinations of clay birds. Each station will have a menu card that lets the shooter know the sequence of clay birds he or she will be shooting at (i.e. which trap the clay bird will be coming from). Typical five stand targets are a rabbit, overhead, standard skeet high house and low house shots, teal (launched straight up into the air), and an incoming bird. There are three presentations at each of your five “stations”: bring extra shells sometimes you may use 30 shells per round.</div>,
        <div className="service-text">There are three presentations at each of your five “stations”:</div>,
        <div className="service-text">SINGLE: with two shells loaded, call for the target. One target is thrown (as listed on your menu), and you are allowed two shots to break the bird.</div>,
        <div className="service-text">REPORT PAIR: with two shells loaded, call for the target. One target is thrown, and the second target is thrown upon the sound of your first shot.</div>,
        <div className="service-text">TRUE PAIR: with two shells loaded, call for the bird. Two targets are thrown at the same time.  Plan your shots considering the traps being thrown – incoming, outgoing, a rabbit, etc.</div>,
        <div className="service-text bolded">USI now has two 5-stand fields and 5 additional new traps. One field is set for challenging targets and the other is for easier practice targets.</div>,
    ],
    hours: [
        <div className="service-text">11:00AM - 6:00PM Wednesday thru Thursday</div>,
        <div className="service-text"> 10:00AM - 3:00 PM Friday</div>,
        <div className="service-text"> 10:00AM - 6:00PM Saturday and Sunday</div>,
    ],
    membership: <div className="service-text">{"Open to all"}</div>,
    safety: [
        <div className="service-text">USI does not rent guns or give lessons, however we have a list of Authorized Instructors shown on the “Instructors” page</div>,
        <div className="service-text bolded">EYE AND EAR PROTECTION ARE MANDATORY ON ALL USI RANGES</div>,
        <div className="service-text bolded">Bring your firearms to the range UNLOADED and ENCASED</div>,
    ],
    pricing:
    {
        public: "14.00",
        vip: "10.00",
        junior: "8.00"
    }
}

const archeryServiceData =
{
    name: "Archery & Impalement Arts",
    details: [
        <div className="service-text"> The United Sportsmen archery range is located across from the Multi-Purpose range. The archery range is open to “MEMBERS ONLY” and for club sponsored activities.</div>,
        <div className="service-text"> The “Impalement Arts” is a sport of tomahawk and knife throwing into wooden targets.</div>,
        <div className="service-text"> The impalement range is now located across from the Archery range, and is open for club members and club activities only.</div>
    ],
    hours: null,
    membership: <div className="service-text">Archery: Guests are welcome, but must be accompanied by a club member. <br /> Impalement Arts: Open for club members and club activities only.</div>,
    safety: [
        <div className="service-text bolded">Cross Bows and Broad Head arrows are prohibited.</div>,
    ],
    pricing:
    {
        public: "5.00",
        vip: "3.00",
        junior: null
    }
}

export { rifleServiceData, trapServiceData, archeryServiceData, standServiceData }