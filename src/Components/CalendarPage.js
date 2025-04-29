import { useState, useEffect } from "react";
import Footer from "./Footer"
import NavBar from "./NavBar"
import "../assets/css/CalendarPage.css"

const HomePage = () =>
{
    const [calendarSrc, setCalendarSrc] = useState("");

    useEffect(() =>
    {
        const updateCalendarSrc = () =>
        {
            const baseSrc = "https://calendar.google.com/calendar/embed?height=900&wkst=1&bgcolor=%23A79B8E&ctz=America%2FLos_Angeles&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=YWRtaW5pc3RyYXRvckB1bml0ZWRzcG9ydHNtZW4uY29t&color=%237CB342&color=%23E67C73&title=USI%20Events%20Calendar";
            const view = window.innerWidth <= 1400 ? "AGENDA" : "MONTH";
            setCalendarSrc(`${baseSrc}&mode=${view}`);
        };

        updateCalendarSrc(); // Set on initial load

        window.addEventListener("resize", updateCalendarSrc);
        return () => window.removeEventListener("resize", updateCalendarSrc);
    }, []);

    return (
        <div className="homepage-container">
            <NavBar />
            <div className="calendarcontainer">
                <div className="calendarcontents">
                    <div className="text-header">USI Event Calendar</div>
                    <div className="text-subheader">
                        The USI calendar is carefully maintained and shows all activities on the property. This includes club activities as well as commercial training activities hosted on the site.
                    </div>
                    <div className="text-subheader">
                        Weather, power, safety or maintenance closures will be shown on the Calendar as they occur.
                    </div>
                    <div className="calendar">
                        {calendarSrc && (
                            <iframe
                                className="actualcalendar"
                                frameBorder="0"
                                scrolling="no"
                                src={calendarSrc}
                                title="USI Events Calendar"
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
