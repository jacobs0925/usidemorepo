import '../assets/fonts/fonts.css'
import '../assets/css/VedusServices.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from 'react'
import { rifleServiceData, trapServiceData, standServiceData, archeryServiceData } from './ServiceData';
import CustomSmallButton from './CustomSmallButton';


const VedusSelector = ({ text, onPress, isSelected }) =>
{

    return (
        <div className={'vedusSelector' + (isSelected ? ' selected' : '')} onClick={() => onPress()}>
            {text}
        </div>
    )
}

const VedusCard = ({ service }) =>
{

    return (
        <div className='vedusCard'>
            <div className="serviceHeader">{service.name}</div>
            <div className='servicesection'>
                <div className="cardHeader">Details:</div>
                {service.details}
            </div>

            <div className='servicesection'>
                <div className="cardHeader">Membership: </div>
                {service.membership}
            </div>

            {service.hours != null ?<div className='servicesection'>
                <div className="cardHeader">Hours:</div>
                {service.hours}
            </div> : null}

            <div className='servicesection'>
                <div className="cardHeader">Safety and Procedures:</div>
                {service.safety}
            </div>

            <div className='servicesection'>
                <div className="cardHeader">Pricing:</div>
                {Object.entries(service.pricing).map(([key, value]) => (value != null ?
                    <div className="priceitem service-text" key={key}>{key === 'public' ? 'Public (non-VIP)' : key}: ${value}</div> : null
                ))}
                <div className='service-text cardSubHeader'> The U.S.I. "VIP program" is available for our frequent participants and those that wish to support U.S.I.'s mission to provide the finest and most diverse shooting sports facility in the Bay Area. The V.I.P. card is only available to members of one or more of the 5 clubs and is valid for one year from the date of.purchase. The V.I.P. card allows holders to pay discounted rates on ammunition and range use. If you shoot more than 5 rounds on the shotgun fields a month, or more than once a month on the Rifle Pistol range, you will save money with the V.I.P. card. Discounted rates also apply at the MPR and A/P ranges. The V.I.P. card is now $250.00 and can be purchased at the Rifle-Pistol office or the Clubhouse. If you are not a member of one of the clubs please visit the U.S.I. website for membership information. </div>
            </div>
        </div>
    )
}

const VedusServices = ({ header, subheader }) =>
{
    const mapping =
    {
        'rifle': rifleServiceData,
        'trap': trapServiceData,
        'stand': standServiceData,
        'archery': archeryServiceData
    }
    const [selected, setSelected] = useState('rifle')
    return (
        <div className='servicesContainer'>
            <div className='servicesContent'>
                <div className='serviceBigHeader'>
                    {header}
                </div>
                <div className='serviceSubHeader'>
                    {subheader}
                </div>
                <div className='serviceSelectorContainer'>
                    <VedusSelector text='Rifle' isSelected={selected === 'rifle'} onPress={() => setSelected('rifle')}></VedusSelector>
                    <VedusSelector text='Trap & Skeet' isSelected={selected === 'trap'} onPress={() => setSelected('trap')}></VedusSelector>
                    <VedusSelector text='Five Stand' isSelected={selected === 'stand'} onPress={() => setSelected('stand')}></VedusSelector>
                    <VedusSelector text='Archery' isSelected={selected === 'archery'} onPress={() => setSelected('archery')}></VedusSelector>

                </div>
                <div className='servicesRow'>
                    <VedusCard service={mapping[selected]}></VedusCard>
                </div>
            </div>
        </div>
    )
}

export default VedusServices