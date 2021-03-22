import React ,{useState} from 'react'
import {connect} from 'react-redux'
import './RecentNav.css'
import Select2 from '../../../../UI/Select2/Select2'
import Calendar from '../../../../UI/Calendar/Calendar'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const RecentNav = (props) => {
    const [show , setShow] = useState(false);
    const [year , setYear] = useState(2020);

    const yearAddHandler = ()=>{
        setYear(currState=>currState + 1)
    };
    const yearSubtractHandler = ()=>{
        setYear(currState=>currState - 1)
    };

    const calendarHandler =()=>{
        setShow(!show)
    };

    const handleClickAway = ()=>{
        setShow(false)
    }

    return (
       <ClickAwayListener onClickAway={handleClickAway}>
        <div className='recent_nav'>
            <p className='recent_p1'>Recent Checkout</p>
            <div className='recent_subnav1'>
                <div>
                   <p className='recent_p2' style={{fontWeight:'400'}}>Checkouts</p>
                   <p className='underline'></p>
                </div>
                <p className='recent_p3'>Declines</p>
            </div>
            <div className='recent_subnav2'>
                <div className='recent_calendar'>
                  <p className='recent_p4'>{props.dat} {props.cYear ? year : '2020'}</p>
                  <img src='./icons/calendar.png' className='calendar_icon' onClick={calendarHandler} />
                </div>
                <Select2 
                 day='Daily'
                 month='Monthly'
                 year='Yearly'/>
               {show && <Calendar
                          Year={year} 
                          yearAdd={yearAddHandler}
                          yearSubtract={yearSubtractHandler}/>}

               {show && <a className='calendar_hook'></a>}
            </div>
        </div>
     </ClickAwayListener>   
    )
}

const mapStateToprops = state =>{
    return{
        dat : state.date,
        cYear : state.choosenYear
    }
}

export default connect(mapStateToprops)(RecentNav)
