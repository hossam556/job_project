import React from 'react'
import Nav from '../Nav/Nav'
import './Renewal.css'
import KeyRenewal from './KeyRenewal/KeyRenewal'
import DaysRemaining from './DaysRemaining/DaysRemaining'
import RecentRenewal from './RecentRenewal/RecentRenewal'
import RenewalOptions from './RenewalOptions/RenewalOptions'

const Revewal = () => {
    return (
        <div>
            <Nav title = 'Renewal'/>
            <div className='renewal_container'>
                <div className='renewal_container1'>
                     <KeyRenewal/>
                     <DaysRemaining/>
                     <RecentRenewal/>
                </div>
                <RenewalOptions/>
            </div>
        </div>
    )
}

export default Revewal
