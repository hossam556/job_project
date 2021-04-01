import React from 'react'
import './RenewalOptions.css'
import RenewalOption from './RenewalOption/RenewalOption'

const RenewalOptions = () => {
    return (
        <div className='keyRenewal_container '>
            <p className='keyRenewal_head'>RENEWAL OPTIONS</p>
            <div className='renewalOptions_content'>
                <RenewalOption month='1' price='34,99'/>
                <RenewalOption month='2' price='69,99'/>
                <RenewalOption month='3' price='104,99' color/>
                <RenewalOption month='4' price='204,99'/>
            </div> 
                <div className='renewalOption_btn_container'>
                <a className='renewalOption_btn'>PURCHASE NOW</a>
            </div>
        </div>
    )
}

export default RenewalOptions
