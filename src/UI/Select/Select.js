import React ,{useState}from 'react'
import './Select.css'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Select.css'
import SelectList from './SelectList/SelectList'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'



const Select = (props) => {
     
  

    return (
        <div className='select_box2'>
        {
            props.week && <p onClick={props.onShowSelectList}>{props.period}
            {props.showList ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> }</p>
        } 
        {
            props.month && <p onClick={props.onShowSelectList}>Monthly
            {props.showList ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

        } 
         {
            props.year && <p onClick={props.onShowSelectList}>Yearly
            {props.showList ?  <ArrowDropUpIcon style={{color:'white',fontSize:'19px'}}/> : <ArrowDropDownIcon style={{color:'white',fontSize:'19px'}}/> } </p>

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
