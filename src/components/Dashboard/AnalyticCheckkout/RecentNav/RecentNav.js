import React ,{useState} from 'react'
import {connect} from 'react-redux'
import './RecentNav.css'
import Select2 from '../../../../UI/Select2/Select2'
import Calendar from '../../../../UI/Calendar/Calendar'
import Calendar2 from '../../../../UI/Calendar/Calender2'
import Calendar3 from '../../../../UI/Calendar/Calendar3'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import calendar from '../../../../Icons/Calendar.svg'

const RecentNav = (props) => {
    const [showMonth , setShowMonth] = useState(false);
    const [showDay , setShowDay] = useState(false);
    const [showYear , setShowYear] = useState(false);


    const [year , setYear] = useState(2020);
    const [yearRange1 , setYearRange1] = useState(2014);
    const [yearRange2 , setYearRange2] = useState(2025);
     
    let yearsCalendar = [];

    for(let i=yearRange1 ; i<= yearRange2 ; i++){
        yearsCalendar.push(i)
    };


    const yearAddHandler = ()=>{
        setYear(currState=>currState + 1)
    };
    const yearSubtractHandler = ()=>{
        setYear(currState=>currState - 1)
    };

    const yearRangeAddHandler = ()=>{
        setYearRange1(currState=>currState + 12)
        setYearRange2(currState=>currState + 12)
    };
    const yearRangeSubtractHandler = ()=>{
        setYearRange1(currState=>currState - 12)
        setYearRange2(currState=>currState - 12)
    };

    const calendarHandler =()=>{

        props.cDay && setShowDay(!showDay);
        props.cMonth && setShowMonth(!showMonth);
        props.cYear && setShowYear(!showYear);
    };

    const handleClickAway = ()=>{
        setShowDay(false)
        setShowMonth(false)
        setShowYear(false)
    };

    const selectCloseCalender =()=>{
        setShowDay(false)
        setShowMonth(false)
        setShowYear(false)

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
            <div className={`recent_subnav2 ${props.cYear && 'calYear2' }`}>
                <div className={`recent_calendar ${props.cYear && 'calYear' }`}>
                  {props.cDay && <p className='recent_p4'>{props.dat} {props.chYear ? year : '2020'}</p>}
                  {props.cMonth && <p className='recent_p4'>{props.dat} {props.chYear ? year : '2020'}</p>}
                  {props.cYear && <p className='recent_p4'>{props.date2}</p>}
                  <img src={calendar} className='calendar_icon' onClick={calendarHandler} />
                </div>
                <Select2 
                 day='Daily'
                 month='Monthly'
                 year='Yearly'
                 close={selectCloseCalender}/>
                {showDay && <Calendar2/> } 
                {showYear && <Calendar3
                               Year={`${yearRange1} - ${yearRange2}`}
                               yearAdd={yearRangeAddHandler}
                               yearSubtract={yearRangeSubtractHandler}
                               yearsCalendar={yearsCalendar}/> } 

               {showMonth && <Calendar
                          Year={year} 
                          yearAdd={yearAddHandler}
                          yearSubtract={yearSubtractHandler}/>}

               {showMonth  && <a className='calendar_hook'></a>}
               {showDay && <a className='calendar_hook'></a>}
               {showYear && <a className='calendar_hook'></a>}

            </div>
        </div>
     </ClickAwayListener>   
    )
}

const mapStateToprops = state =>{
    return{
        dat : state.date,
        chYear : state.choosenYear,
        cDay :state.cDay,
        cMonth : state.cMonth,
        cYear : state.cYear,
        date2 : state.date2
        
    }
}

export default connect(mapStateToprops)(RecentNav)
