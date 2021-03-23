import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Calendar2.css'
import CalendarItem from './CalendarItem/CalendarItem'
import {data} from '../../CalenderData'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Calendar2 = (props) => {
    const classes = useStyles();

    const [count , setCount]= useState(0);
  
    const date = new Date();
    date.setDate(1);

    date.setMonth(date.getMonth() + count);

    let days = [];
    let prevDays = [];
    let nextDays = [];

    const months = ["January","February","March","April","June","July","August","September","October","November","December"];
    

    const nextMonth=()=>{
        setCount(prev => prev + 1)
    };


    const prevMonth=()=>{
        setCount(prev => prev - 1)
    };


 
    
    
         const lastDay = new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDate();
         const prevLastDay = new Date(date.getFullYear(), date.getMonth() , 0).getDate();
    
         const firstDayIndex = date.getDay();  
         const lastDayIndex =  new Date(date.getFullYear(), date.getMonth() + 1 , 0).getDay();
         
         const nextDaysNo = 7 - lastDayIndex - 1 ;
    
       
    
        for(let x= firstDayIndex ; x>0 ; x--){
              prevDays.push(<div className='prev_date'>{prevLastDay - x + 1}<a className='prev_back'></a></div>)
        }
    
        for(let i=1 ; i <= lastDay ; i++ ){
            if(i=== 12 || i === 25){
                days.push(<div className='day_colored_container'>{i}</div>)
            }else{
                days.push(<div>{i}</div>)
            }              
        };
    
        for(let j=1 ; j<= nextDaysNo ; j++ ){
            nextDays.push(<div className='next_date'>{j}<a className='prev_back'></a></div>)
        }

   



    return (
        <Card className={classes.root} variant="outlined"> 
            <div className='calendar_head2'>
                <ArrowBackIcon style={{fontSize:'19px' , cursor:'pointer'}} onClick={prevMonth}/>
                <p style={{fontSize:'14px',fontWeight:'600'}}>{months[date.getMonth()]} {date.getFullYear()}</p>
                <ArrowForwardIcon style={{fontSize:'19px',cursor:'pointer'}} onClick={nextMonth}/>
            </div>
            <div className='calendar_days'>
                 <div>S</div>
                 <div>M</div>
                 <div>T</div>
                 <div>W</div>
                 <div>T</div>
                 <div>F</div>
                 <div>S</div>
            </div>
            <div className='calendar_day'>
                {prevDays}
                {days}
                {nextDays}
            </div>
           
        </Card>
    )
}



export default Calendar2

const useStyles = makeStyles({
    root: {
      backgroundColor: '#312C4E',
      borderRadius: '10px',
      color :'white',
      padding:'5px 15px',
      boxSizing:'border-box',
      position:'absolute',
      width:'245px',
      zIndex:10,
      top:'45px',
      right:'55px'
    },
    
})