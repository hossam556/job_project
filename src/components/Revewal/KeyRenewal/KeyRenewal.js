import React from 'react'
import './KeyRenewal.css'
import eyee from '../../../Icons/eyee.svg'

const KeyRenewal = () => {
    return (
        <div className='keyRenewal_container'>
            <p className='keyRenewal_head'>KEY RENEWAL</p>
            <div className='keyRenewal_content'>
                <div className='sidebarCard_cont'>
                        <a className='keyRenewal_icon_container'>XXXX-XXXX-XXXX-XXXX<img src={eyee} className='keyRenewal_icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default KeyRenewal
