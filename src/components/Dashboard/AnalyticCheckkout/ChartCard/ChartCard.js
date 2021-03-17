import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chart from './Chart'
import './ChartCard.css'
import Select from '../../../../UI/Select/Select'
import {connect} from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Chaart from './Chaart'

const CheckoutCards = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <div className='chart_header'>
              <span style={{fontSize:'14px' , fontWeight:'600'}}>Analytic</span>
              <div className='chart_header1'>
                  <Select 
                  period='Weekly' />
                  <span style={{fontSize:'12px', fontWeight:'400' }}>Store</span>
              </div>
           </div>
          {props.week && <div className='chart_header2'>
               <p style={{fontSize:'10px', fontWeight:'400'}}><span style={{opacity:'0.4', paddingRight:'10px'}}>showing Data</span> : 12 August-25 August</p>
               <p style={{fontSize:'10px', fontWeight:'400' }}>August 2020</p>
           </div>}
           {props.month && <div className='chart_header2'>
               <div className='chart_header2box'>
                   <ArrowBackIcon className='chart_arrow1' style={{fontSize:'16px'}}/>
                   <ArrowForwardIcon className='chart_arrow2' style={{fontSize:'16px'}}/>
                   <a href='#' className='chart_header_a'></a>
                   <a href='#' className='chart_header_a2'></a>
                 <p style={{color:'#27DAE1'}}>12 Months</p>
                 <p>6 Months</p>
                 <p>3 Months</p>
               </div>
               <p style={{fontSize:'10px', fontWeight:'700' }}> 2020</p>
           </div>}
           {props.year && <div className='chart_header2'>
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
               {/* <p style={{fontSize:'10px', fontWeight:'700' }}> 2020</p> */}
           </div>}
           {/* <Chart/> */}
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
      marginLeft:'20px',
    //   height:'350px'
    },
   
})

