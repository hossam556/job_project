import React ,{useState}from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Calendar.css'
import CalendarItem3 from './CalendarItem/CalendarItem3'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import * as actions from '../../store/actions/index'


const Calendar3 = (props) => {
    const classes = useStyles();

    let calendarItem = props.yearsCalendar.map((item)=><li className='calendar_list'>
            <CalendarItem3
              name={item}
              choose={()=>props.onChooseYear(item)}/>
    </li>)

    return (
        <Card className={classes.root} variant="outlined"> 
            <div className='calendar_head'>
                <ArrowBackIcon style={{fontSize:'19px' , cursor:'pointer'}} onClick={props.yearSubtract}/>
                <p style={{fontSize:'14px',fontWeight:'600'}}>{props.Year}</p>
                <ArrowForwardIcon style={{fontSize:'19px',cursor:'pointer'}} onClick={props.yearAdd}/>
            </div>
            <div className='calendar_container'>
                {calendarItem}
            </div>
        </Card>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onChooseYear : (date2) => dispatch(actions.chooseYear(date2)) ,
    }
}

export default connect(null , mapDispatchToProps)(Calendar3)

const useStyles = makeStyles({
    root: {
      backgroundColor: '#312C4E',
      borderRadius: '10px',
      color :'white',
      padding:'10px',
      position:'absolute',
      width:'234px',
      zIndex:10,
      top:'45px',
      right:'55px'
    },
    
})