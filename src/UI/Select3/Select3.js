import React ,{useState}from 'react'
import classes from './Select3.module.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SelectList3 from './SelectList3/SelectList3'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const Select3 = (props) => {
    const [showdrop , setshowdrop]=useState(false);
    const [daily , setdaily]=useState(true);
    const [weekly , setweekly]=useState(false);
    const [monthly , setmonthly]=useState(false);
    const [any , setAny]=useState(false);



    const dailyHandle=()=>{
         setdaily(true);
         setweekly(false)
         setmonthly(false)
        setshowdrop(false)
        setAny(false)

    }
    const weeklyHandle=()=>{
        setweekly(true)
        setdaily(false)
        setmonthly(false)
        setshowdrop(false)
        setAny(false)

   }
   const monthlyHandle=()=>{
        setmonthly(true)
        setdaily(false)
        setweekly(false)
        setshowdrop(false)
        setAny(false)
};

const anyHandle=()=>{
    setAny(true)
    setmonthly(false)
    setdaily(false)
    setweekly(false)
    setshowdrop(false)

}

const handleClickAway= ()=> {
    setshowdrop(false)
};


  

    return (
        <ClickAwayListener onClickAway={handleClickAway}> 
        <div >
            <div className={classes.box}>
        {
            daily && <p onClick={()=>setshowdrop(!showdrop)}>{props.day} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> }</p>
        } 
        {
            weekly && <p onClick={()=>setshowdrop(!showdrop)}>{props.month}
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 
         {
            monthly && <p onClick={()=>setshowdrop(!showdrop)}>{props.year} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 
         {
            any && <p onClick={()=>setshowdrop(!showdrop)}>Any Time
            {showdrop ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 

          {showdrop && <div className={classes.selectList}><SelectList3
                  dailyHandle={dailyHandle}
                  weeklyHandle={weeklyHandle}
                  monthlyHandle={monthlyHandle}
                  anyHandle={anyHandle}
                  day={props.day}
                  month={props.month}
                  year={props.year}
                  /> </div>}
           </div>
        </div>
        </ClickAwayListener>
    )
}

export default Select3