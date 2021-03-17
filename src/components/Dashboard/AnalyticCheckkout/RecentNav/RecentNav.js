import React ,{useState} from 'react'
import './RecentNav.css'
import Date from './Date'
import Select2 from '../../../../UI/Select2/Select2'
import Calendar from '../../../../UI/Calendar/Calendar'

const RecentNav = () => {
    const [show , setShow] = useState(false);

    const calendarHandler =()=>{
        setShow(!show)
    }

    return (
        <div className='recent_nav'>
            <p className='recent_p1'>Recent Checkout</p>
            <div className='recent_subnav1'>
                <p className='recent_p2'>Checkouts</p>
                <p className='recent_p3'>Declines</p>
            </div>
            <div className='recent_subnav2'>
                <p className='recent_p4'>August 2020</p>
                <img src='./icons/calendar.png' className='calendar_icon' onClick={calendarHandler} />
                {/* <Date/> */}              
                <Select2 
                 day='Daily'
                 month='Monthly'
                 year='Yearly'/>
               {show && <Calendar/>}
            </div>
        </div>
    )
}

export default RecentNav
