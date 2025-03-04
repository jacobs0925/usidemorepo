import '../assets/fonts/fonts.css'
import '../assets/css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const NavBarButton = ({ text, nav }) =>
{
    return (
        <Link to={nav} className='navButton'>
            {text}
        </Link>
    );
}

const NavBar = () =>
{
    const navButtons = <div className='navButtonContainer'>
        <NavBarButton text={'Home'} nav={'/'} />
        <NavBarButton text={'Location & Hours'} nav={'/location'} />
        <NavBarButton text={'Ammunition'} nav={'/ammunition'} />
        <NavBarButton text={'Membership'} nav={'/membership'} />
        <NavBarButton text={'Calendar'} nav={'/calendar'} />
        <NavBarButton text={'Instructors'} nav={'/instructors'} />
        <NavBarButton text={'News'} nav={'/news'} />
        <NavBarButton text={'Wavier'} nav={'/waiver'} />
        <NavBarButton text={'Contact Us'} nav={'/contact'} />
    </div>
    const [mobileNavVisible, revealNav] = useState(false)
    return (
        <>
            <div className="navmobilecontainer">
                <RxHamburgerMenu onClick={() => revealNav(!mobileNavVisible)} className='burger' color={'white'} />
                {mobileNavVisible ? navButtons : null}
            </div>
            <div className='nav-container'>
                <div className='navlogocontainer'>
                    <img className="navlogo" src={logo} alt='logo'></img>
                    <div className='navlogotext'>United Sportsmen</div>
                </div>
                {navButtons}
            </div>
        </>

    )
}



export default NavBar