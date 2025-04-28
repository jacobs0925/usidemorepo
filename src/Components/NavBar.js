import '../assets/fonts/fonts.css'
import '../assets/css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { HashLink  } from 'react-router-hash-link';

const NavBarButton = ({ text, nav, style }) =>
{
    return (
        <HashLink style={style ?? {}} to={nav} className='navButton'>
            {text}
        </HashLink>
    );
}

const NavBarHoverButton = ({ text, nav, children }) =>
{
    const [isHover, setIsHovered] = useState(false);

    return (
        <div className='navBarHoverButton'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Link
                to={nav}
                className='navButton'>
                {text}
            </Link>
            {isHover && <div className="navHoverContainer">{children}</div>}
        </div>
    );
};

const NavBar = () =>
{
    const navButtons = <div className='navButtonContainer'>
        <NavBarButton text={'Home'} nav={'/'} />
        <NavBarButton text={'Location & Hours'} nav={'/location'} />
        <NavBarHoverButton text={'About'} nav={'/about'}>
            <NavBarButton text={'Ammunition'} nav={'/about#ammunition'} />
            <NavBarButton text={'Membership'} nav={'/about#membership'} />
            <NavBarButton text={'Sponsors'} nav={'/about#sponsors'} />
        </NavBarHoverButton>
        <NavBarButton text={'Calendar'} nav={'/calendar'} />
        <NavBarButton text={'Instructors'} nav={'/instructors'} />
        <NavBarButton text={'Wavier'} nav={'/waiver'} />
        <NavBarButton text={'Contact Us'} nav={'/contact'} />
    </div>
    const [mobileNavVisible, revealNav] = useState(false)
    return (
        <>
            {<div className="navmobilecontainer">
                <div className="flexrow mobilenavheader">
                    <RxHamburgerMenu onClick={() => revealNav(!mobileNavVisible)} className='burger' color={'white'} />
                    <div className='navlogotext'>United Sportsmen</div>
                    <img className="navlogo" src={logo} alt='logo'></img>
                </div>
                {mobileNavVisible ? navButtons : null}
            </div>}
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