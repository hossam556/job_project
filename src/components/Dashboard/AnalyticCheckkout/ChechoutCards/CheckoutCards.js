import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './CheckoutCards.css'
import Select3 from '../../../../UI/Select3/Select3'
import PieChart from './PieChart'

const CheckoutCards = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <div className='checkout_date'>
               <span style={{fontSize:'14px' , fontWeight:'600'}}>Declines Checkout</span>
               <Select3 
                 day='1 Week'
                 month='1 Month'
                 year='1 year'/>
           </div>
           <div className='checkout_data'>
                {/* <img src={props.image} style={{fontSize:'25px'}}/> */}
                <div className='pie_div'><PieChart/></div>
                <div></div>
                <div></div>
                <div className='checkout_data1'>
                    <p style={{fontSize:'12px' , fontWeight:'400'}}>All Task</p>
                    <p style={{fontSize:'12px' , fontWeight:'400'}}>Checks</p>
                </div>
                <div className='checkout_data2'>
                    <p style={{fontSize:'12px' , fontWeight:'400'}}>12,780</p>
                    <p style={{fontSize:'12px' , fontWeight:'400' , paddingLeft:'6px'}}>2,700</p>
                </div>
                 <img src='./icons/whitedote.png' className='white_dote'/>
                 <img src='./icons/bluedote.png'  className={`colored_dote ${props.show && 'pinkk'}`}/>
           </div>
        </Card>
    )
}

export default CheckoutCards

const useStyles = makeStyles({
    root: {
    backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      width:'300px',
      height:'150px',
    },
   
})