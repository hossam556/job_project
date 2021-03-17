import React ,{useState}from 'react'
import './Select.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Select.css'
import SelectList from './SelectList/SelectList'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'


const Select = (props) => {
//     const [showdrop , setshowdrop]=useState(false);
//     const [daily , setdaily]=useState(true);
//     const [weekly , setweekly]=useState(false);
//     const [monthly , setmonthly]=useState(false);



//     const dailyHandle=()=>{
//          setdaily(true);
//          setweekly(false)
//          setmonthly(false)
//          setshowdrop(false)


//     }
//     const weeklyHandle=()=>{
//         setweekly(true)
//         setdaily(false)
//         setmonthly(false)
//         setshowdrop(false)

//    }
//    const monthlyHandle=()=>{
//         setmonthly(true)
//         setdaily(false)
//         setweekly(false)
//         setshowdrop(false)
// }

  

    return (
        <div className='select_box2'>
        {
            props.week && <p onClick={props.onShowSelectList}>{props.period}
            {props.showList ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> }</p>
        } 
        {
            props.month && <p onClick={props.onShowSelectList}>Monthly
            {props.showList ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

        } 
         {
            props.year && <p onClick={props.onShowSelectList}>Yearly
            {props.showList ?  <ArrowDropUpIcon style={{color:'white'}}/> : <ArrowDropDownIcon style={{color:'white'}}/> } </p>

        } 
           {props.showList && <SelectList
                  dailyHandle={props.onWeeklyHandler}
                  weeklyHandle={props.onMonthlyHandler}
                  monthlyHandle={props.onYearlyHandler}
                  period={props.period}
                  />}
        </div>
    )
}

const mapStateToprops = state =>{
    return{
        week : state.weekly,
        month : state.monthly,
        year : state.yearly,
        showList : state.showSelectList
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onWeeklyHandler : () => dispatch(actions.weeklyHandler()) ,
        onMonthlyHandler : () => dispatch(actions.monthlyHandler()) ,
        onYearlyHandler : () => dispatch(actions.yearlyHandler()) ,
        onShowSelectList : () => dispatch(actions.showSelectList()) ,

    }
}

export default connect(mapStateToprops,mapDispatchToProps)(Select)
