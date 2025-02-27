import '../assets/fonts/fonts.css'
import '../assets/css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

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
    return (
        <div className='nav-container'>
            <div className='navlogocontainer'>
                <img className="navlogo" src={logo} alt='logo'></img>
                <div className='navlogotext'>United Sportsmen</div>
            </div>
            <div className='navButtonContainer'>
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
            {/* <div className='navButtonContainer'>
                <VedusButton text='Click Here' onPress={() => console.log('aaaaa')}></VedusButton>
                <VedusButton text='Sign Up' invert={true} onPress={() => console.log('bbbbb')}></VedusButton>
            </div> */}
        </div>
    )
}



export default NavBar