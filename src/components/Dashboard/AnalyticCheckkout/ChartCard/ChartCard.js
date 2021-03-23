import React ,{useState}from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chart from './Chart'
import './ChartCard.css'
import Select from '../../../../UI/Select/Select'
import {connect} from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Chaart from './Chaart'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Select2 from '../../../../UI/Select2/Select2'
import calendar from '../../../../Icons/Calendar.svg'


const CheckoutCards = (props) => {
    const classes = useStyles();

    const [show , setShow] = useState(false);

    const calendarHandler =()=>{
        setShow(!show)
    }

    return (
        <Card className={classes.root} variant="outlined">
           <div className='chart_header'>
              <span style={{fontSize:'15px' , fontWeight:'600'}}>Analytic</span>
              <div className='chart_header1'>
                  <Select 
                  period='Weekly' />
                  <Select2 
                    day='Store'
                    month='Month'
                    year='year'
                    close={calendarHandler}/>
              </div>
           </div>
          {props.week && <div className='chart_header2'>
               <p className='chart_header2_p'><span style={{opacity:'0.4', paddingRight:'10px'}}>showing Data</span> : 12 August-25 August</p>
               <p className='chart_header2_p'>August 2020 <img src={calendar} className='chart_calendar' /></p>
           </div>}
           {props.month && <div className='chart_header2'>
               <div className='chart_header2box'>
                   <ArrowBackIcon className='chart_arrow1' style={{fontSize:'16px'}}/>
                   <ArrowForwardIcon className='chart_arrow2' style={{fontSize:'16px'}}/>
                   <a href='#' className='chart_header_a'></a>
                   <a href='#' className='chart_header_a2'></a>
                 <p style={{color:'#27DAE1',marginBottom:'0px'}}>12 Months</p>
                 <p style={{marginBottom:'0px'}}>6 Months</p>
                 <p style={{marginBottom:'0px'}}>3 Months</p>
               </div>
               <p style={{fontSize:'10px', fontWeight:'700' ,marginBottom:'0px'}}> 2020 <img src={calendar} className='chart_calendar'/></p>
           </div>}
           {props.year && <div className='chart_header2 years'>
               <div className='chart_header2box yearsChoice'>
                   <ArrowBackIcon className='chart_arrow1' style={{fontSize:'16px'}}/>
                   <ArrowForwardIcon className='chart_arrow2' style={{fontSize:'16px'}}/>
                   <a href='#' className='chart_header_a'></a>
                   <a href='#' className='chart_header_a2'></a>
                
               </div>
               <div className='chart_years'>
                 <p  className='chart_years1'>12 Years</p>
                 <p className='chart_years2'>6 Years</p>
               </div>
           </div>}
           
           <Chaart/>
        </Card>
    )
}

const mapStateToprops = state =>{
    return{
        week : state.weekly,
        month : state.monthly,
        year : state.yearly,
    }
}

export default connect(mapStateToprops)(CheckoutCards)

const useStyles = makeStyles({
    root: {
    backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
       width:'64.5%',
      position:'relative'
    },
   
})

