import React from 'react'
import Nav from '../Nav/Nav'
import './Renewal.css'
import KeyRenewal from './KeyRenewal/KeyRenewal'

const Revewal = () => {
    return (
        <div>
            <Nav title = 'Renewal'/>
            <div className='renewal_container'>
                <div className='renewal_container1'>
                     <div className='renewalItem1'><KeyRenewal/></div>
                     <div>2</div>
                     <div>3</div>
                </div>
                <div className='renewal_container2'>
                      1
                </div>
            </div>
        </div>
    )
}

export default Revewal
