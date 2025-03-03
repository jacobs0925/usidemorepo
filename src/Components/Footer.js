import { data } from "react-router-dom";
import "../assets/css/footer.css"
import { useState, useEffect } from "react";

const formatTime = (isoString) =>
{
    const date = new Date(isoString);
    return date.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};

const Weather = () =>
{
    const [weather, setWeather] = useState(null);
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    useEffect(() =>
    {

        fetch("https://api.weather.gov/gridpoints/MTR/102,113/forecast/hourly")
            .then((response) => response.json())
            .then((json) => setData1(json.properties.periods[0]))
            .catch((error) => console.error("Error fetching data:", error));

        fetch("https://api.open-meteo.com/v1/forecast?latitude=38.02258402430467&longitude=-121.99373117362313&current=temperature_2m,relative_humidity_2m,apparent_temperature,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m&daily=sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=1")
            .then((response) => response.json())
            .then((json) => setData2(json))
            .catch((error) => console.error("Error fetching data:", error));


    }, []);

    useEffect(() =>
    {
        if (!data1 || !data2) return;
        const now = new Date().toLocaleTimeString("en-US", {
            timeZone: "America/Los_Angeles",
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
        });

        setWeather({
            currentTime: now,
            icon: data1.icon,
            currentWeather: data1.shortForecast,
            currentTemp: `${data2.current.temperature_2m}°F`,
            windspeed: `${data2.current.wind_speed_10m} mph`,
            winddirection: data1.windDirection,
            apparentTemp: `${data2.current.apparent_temperature}°F`,
            pressure: `${data2.current.surface_pressure} mb`,
            humidity: `${data2.current.relative_humidity_2m}%`,
            windgusts: `${data2.current.wind_gusts_10m} mph`,
            uvindex: data2.daily.uv_index_max[0],
            sunrise: formatTime(data2.daily.sunrise[0]),
            sunset: formatTime(data2.daily.sunset[0]),
            rainchance: `${data1.probabilityOfPrecipitation.value}%`
        })
    }, [data1, data2])

    return (
        <>{weather ?
            <div className="flexcolumn footertext weathercolumn">
                <div className="weatherheader">Concord CA {weather.currentTime}</div>
                <div className="flexrow flexbetween">
                    <img src={weather.icon} alt="weather icon"></img>
                    <div className="flexcolumn textleft justifycenter">
                        <span>{weather.currentWeather}</span>
                        <span>{weather.currentTemp}</span>
                    </div>
                </div>
                <div>Winds: {weather.windspeed} {weather.winddirection}</div>
                <div>Apparent Temperature: {weather.apparentTemp}</div>
                <div>Precipitation Chance: {weather.rainchance}</div>
                <div>Pressure: {weather.pressure}</div>
                <div>Relative Humidity: {weather.humidity}</div>
                <div>Wind Gusts: {weather.windgusts}</div>
                <div>UV Index: {weather.uvindex}</div>
                <div>Sunrise: {weather.sunrise}</div>
                <div>Sunset: {weather.sunset}</div>
            </div>
            : "Loading..."}
        </>
    );
};

const Footer = () =>
{

    return (
        <div className="flexcolumn flexcenter">
            <div className="footercontainer flexrow">
                <div className="flexcolumn footercolumn">
                    <div className="footerheader">Location</div>
                    <iframe className="footermap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6286.480971233728!2d-121.99405332355428!3d38.01817269810112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808567875e997d75%3A0xe8a76702d488093c!2s4700%20Evora%20Rd%2C%20Concord%2C%20CA%2094520!5e0!3m2!1sen!2sus!4v1740611982437!5m2!1sen!2sus" width="256" height="256" loading="lazy"></iframe>
                    <div className="flexrow flexeven maxwidth">
                        <a href="https://www.facebook.com/United-Sportsmen-Incorporated-239477569438680/"><img src="https://unitedsportsmen.com/wp-content/uploads/2018/07/Facebook-icon60.png" alt="FB logo" /></a>
                        <a href="https://www.yelp.com/biz/united-sportsmen-concord" target="_blank" rel="noopener"><img class="wp-image-8799 alignnone" src="https://unitedsportsmen.com/wp-content/uploads/2017/03/Yelp-60.jpg" alt="" width="60" height="60" /></a>
                    </div>
                </div>

                <div className="flexcolumn footercolumn">
                    <div className="footerheader">Hours</div>
                    <div className="footersubheader">
                        Rifle/Pistol:<br />
                        Winter  Hours
                    </div>

                    <div className="footertext">
                        10:00 AM – 4:30 PM  Wed. – Friday<br />
                        9:00 AM – 4:30 PM  Sat. &  Sun.
                    </div>

                    <div className="footersubheader">Trap/Skeet/Five Stand:</div>
                    <div className="footertext">
                        11:00 AM – 6:00 PM Wed. – Thur.<br />
                        10:00 AM – 3:00 PM  Friday<br />
                        10:00 AM – 6:00 PM Sat. & Sun.
                    </div>
                </div>

                <div className="flexcolumn footercolumn">
                    <div className="footerheader">Contact Us</div>
                    <div className="footertext">
                        United Sportsmen Incorporated<br />
                        4700 Evora Road<br />
                        Concord, California 94520
                    </div>

                    <div className="footertext">
                        Main Office-ShotgunClub House-Rifle & Pistol Range:<br />
                        <div className="bolded">925-676-1987</div>
                    </div>
                </div>

                <div className="flexcolumn footercolumn">
                    <div className="footerheader">USI Weather</div>
                    <Weather></Weather>
                </div>
            </div>
            <div className="footerbottombar">
                Copyright © 2025 United Sportsmen Incorporated - All Rights Reserved | <a>Terms of Use</a> | <a>Privacy Policy</a>
            </div>
        </div>
    )
}

export default Footer