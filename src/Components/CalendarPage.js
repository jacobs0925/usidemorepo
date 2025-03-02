import "../assets/css/CalendarPage.css"
import Footer from "./Footer"
import NavBar from "./NavBar"

const CalendarPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="calendarcontainer">
                <div className="calendarcontents">
                    <div className="text-header">USI Event Calendar</div>
                    <div className="text-subheader">The USI calendar is carefully maintained and shows all activities on the property. This includes club activities as well as commercial training activities hosted on the site.</div>
                    <div className="text-subheader">Weather, power, safety or maintenance closures will be shown on the Calendar as they occur.</div>
                    <div className="calendar">
                        <iframe class=" lazyloaded" style={{"border": "solid 1px #777"}} data-src="https://calendar.google.com/calendar/embed? height=900&amp;wkst=1&amp;bgcolor=%23A79B8E&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YWRtaW5pc3RyYXRvckB1bml0ZWRzcG9ydHNtZW4uY29t&amp;color=%237CB342&amp;color=%23E67C73&amp;title=USI%20Events%20Calendar" width="1100" height="900" frameborder="0" scrolling="no" src="https://calendar.google.com/calendar/embed? height=900&amp;wkst=1&amp;bgcolor=%23A79B8E&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YWRtaW5pc3RyYXRvckB1bml0ZWRzcG9ydHNtZW4uY29t&amp;color=%237CB342&amp;color=%23E67C73&amp;title=USI%20Events%20Calendar"></iframe>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CalendarPage