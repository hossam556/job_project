import React from 'react'
import './RecentNav.css'
import Date from './Date'
import Select2 from '../../../../UI/Select2/Select2'

const RecentNav = () => {
    return (
        <div className='recent_nav'>
            <p className='recent_p1'>Recent Checkout</p>
            <div className='recent_subnav1'>
                <p className='recent_p2'>Checkouts</p>
                <p className='recent_p3'>Declines</p>
            </div>
            <div className='recent_subnav2'>
                {/* <p className='recent_p4'>August 2020</p> */}
                <Date/>
                
                {/* <p className='recent_p5'>Daily</p> */}
                <Select2 
                 day='Daily'
                 month='Monthly'
                 year='Yearly'/>
                
            </div>
        </div>
    )
}

export default RecentNav
