import React from 'react'
import './KeyRenewal.css'
import eyee from '../../../Icons/eyee.svg'

const KeyRenewal = () => {
    return (
        <div className='keyRenewal_container renewalItem1'>
            <p className='keyRenewal_head'>KEY RENEWAL</p>
            <div className='keyRenewal_content'>
                <div className='sidebarCard_cont'>
                        <a className='keyRenewal_icon_container'>XXXX-XXXX-XXXX-XXXX<img src={eyee} className='keyRenewal_icon'/></a>
                </div>
                <p className='keyRenewal_content_p1'>Your current expiration date :</p>
                <h1>December 20, 2021</h1>
                <p className='keyRenewal_content_p2'>Reewal payments do not automatically occur at the end of your expiration.</p>
            </div>
        </div>
    )
}

export default KeyRenewal
