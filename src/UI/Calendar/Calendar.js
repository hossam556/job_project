import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Calendar.css'
import CalendarItem from './CalendarItem/CalendarItem'
import {data} from '../../CalenderData'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Calendar = () => {
    const classes = useStyles();

    const [year , setYear] = useState(2020);

    const yearAddHandler = ()=>{
        let nextYear = year + 1 ;
        setYear(nextYear)
    };
    const yearSubtractHandler = ()=>{
        let nextYear = year - 1 ;
        setYear(nextYear)
    };

    let calendarItem = data.months.map((item)=><li className='calendar_list'>
            <CalendarItem
              name={item}/>
    </li>)

    return (
        <Card className={classes.root} variant="outlined"> 
            <div className='calendar_head'>
                <ArrowBackIcon style={{fontSize:'19px' , cursor:'pointer'}} onClick={yearSubtractHandler}/>
                <p style={{fontSize:'14px',fontWeight:'400'}}>{year}</p>
                <ArrowForwardIcon style={{fontSize:'19px',cursor:'pointer'}} onClick={yearAddHandler}/>
            </div>
            <div className='calendar_container'>
                {calendarItem}
            </div>
        </Card>
    )
}

export default Calendar

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
      right:'45px'
    },
    
})