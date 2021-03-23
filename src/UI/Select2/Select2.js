import React ,{useState}from 'react'
import classes from './Select2.module.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SelectList2 from './SelectList2/SelectList2'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import * as actions from '../../store/actions/index'
import {connect} from 'react-redux'





const Select2 = (props) => {
    const [showdrop , setshowdrop]=useState(false);
    const [daily , setdaily]=useState(true);
    const [weekly , setweekly]=useState(false);
    const [monthly , setmonthly]=useState(false);



    const dailyHandle=()=>{
         setdaily(true);
         setweekly(false)
         setmonthly(false)
        setshowdrop(false)
        props.onCalendarDaily()

    }
    const weeklyHandle=()=>{
        setweekly(true)
        setdaily(false)
        setmonthly(false)
        setshowdrop(false)
        props.onCalendarMonthly()

   }
   const monthlyHandle=()=>{
        setmonthly(true)
        setdaily(false)
        setweekly(false)
        setshowdrop(false)
        props.onCalendarYearly()

  }
  const handleClickAway= ()=> {
      setshowdrop(false)
  };

  const openDropDown = ()=>{
      setshowdrop(!showdrop);
      props.close()
  }

  

    return (
    <ClickAwayListener onClickAway={handleClickAway}>
        <div >
            <div className={classes.box}>
        {
            daily && <p onClick={openDropDown}>{props.day} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> }</p>
        } 
        {
            weekly && <p onClick={openDropDown}>{props.month}
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 
         {
            monthly && <p onClick={openDropDown}>{props.year} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 
          {showdrop && <SelectList2
                  dailyHandle={dailyHandle}
                  weeklyHandle={weeklyHandle}
                  monthlyHandle={monthlyHandle}
                  day={props.day}
                  month={props.month}
                  year={props.year}
                  />}
           </div>
        </div>
    </ClickAwayListener>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onCalendarDaily : () => dispatch(actions.calendarDaily()) ,
        onCalendarMonthly : () => dispatch(actions.calendarMonthly()) ,
        onCalendarYearly : () => dispatch(actions.calendarYearly()) ,

    }
}

export default connect(null , mapDispatchToProps)(Select2)