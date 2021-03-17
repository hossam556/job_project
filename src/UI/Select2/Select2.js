import React ,{useState}from 'react'
import classes from './Select2.module.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SelectList2 from './SelectList2/SelectList2'


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

    }
    const weeklyHandle=()=>{
        setweekly(true)
        setdaily(false)
        setmonthly(false)
        setshowdrop(false)

   }
   const monthlyHandle=()=>{
        setmonthly(true)
        setdaily(false)
        setweekly(false)
        setshowdrop(false)

}

  

    return (
        <div className='box'>
            <div className={classes.box}>
        {
            daily && <p onClick={()=>setshowdrop(!showdrop)}>{props.day} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> }</p>
        } 
        {
            weekly && <p onClick={()=>setshowdrop(!showdrop)}>{props.month}
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

        } 
         {
            monthly && <p onClick={()=>setshowdrop(!showdrop)}>{props.year} 
            {showdrop ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

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
    )
}

export default Select2