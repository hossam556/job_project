import React ,{useState}from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Calendar.css'
import CalendarItem from './CalendarItem/CalendarItem'
import {data} from '../../CalenderData'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import * as actions from '../../store/actions/index'


const Calendar = (props) => {
    const classes = useStyles();

    // const [year , setYear] = useState(2020);

    // const yearAddHandler = ()=>{
    //     setYear(currState=>currState + 1)
    // };
    // const yearSubtractHandler = ()=>{
    //     setYear(currState=>currState - 1)
    // };

    let calendarItem = data.months.map((item)=><li className='calendar_list'>
            <CalendarItem
              name={item.short}
              choose={()=>props.onChooseDate(item.long)}/>
    </li>)

    return (
        <Card className={classes.root} variant="outlined"> 
            <div className='calendar_head'>
                <ArrowBackIcon style={{fontSize:'19px' , cursor:'pointer'}} onClick={props.yearSubtract}/>
                <p style={{fontSize:'14px',fontWeight:'400'}}>{props.Year}</p>
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
        onChooseDate : (date) => dispatch(actions.chooseDate(date)) ,
    }
}

export default connect(null , mapDispatchToProps)(Calendar)

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