import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Favcard.css'



const FavCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <div className='favCard_link_cont'>
               <span style={{fontSize:'20px'}}>{props.title}</span><br/>
               <span style={{fontSize:'10px' , marginLeft:'17px' , fontWeight:'700'}}><img src='./icons/link.png' className='link_icon'/>{props.link}</span>
               <img src='/icons/dote.png' className='favCard_dote1'/>
               <img src='/icons/dote.png' className='favCard_dote2'/>
               <img src='/icons/dote.png' className='favCard_dote3'/>
           </div>
           <div className='favCard_price'> 
                <div className='price_cont1'>
                    <span style={{fontSize:'8px'}}>Checkout Amount</span><br/>
                    <span style={{fontSize:'16px' , paddingRight:'14px'}}>7.855</span>
                    <img src='./icons/true.png' className='price_cont1_icon'/>
                </div>
                <div className='price_cont2'>
                    <span style={{fontSize:'8px'}}>Spent Amount</span><br/>
                    <span style={{fontSize:'16px'}}>$200,023.00</span>
                    <img src='./icons/dollar.png' className='price_cont1_icon'/>

                </div>
           </div>
        </Card>
    )
}

export default FavCard

const useStyles = makeStyles({
    root: {
      backgroundColor: '#17142C',
      borderRadius: '10px',
      color :'white',
      marginBottom:'20px'
    },
    
})