import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './sidebarCard.css'
import Show from '../../../Icons/Show.svg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const DiscordID = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
              <div >
                  <span style={{fontSize:'12px',fontWeight:'600'}}>Lisence Key</span><br/>
                  <div className='sidebarCard_cont'>
                     <a href='#' className='sidebarCard_btn1'>XXXX-XXXX-XXXX-XXXX<img src={Show} className='sidebarCard_icon'/></a>
                  </div>
                  <p style={{fontSize:'12px' , fontWeight:'600', marginBottom:'8px'}}>Expiration</p>
                  <p className='sidebar_date'>Oct 20, 2021</p>
                  <div className='renewal_container'>
                    <a className='sidebarCard_btn2'> Renewal<ArrowForwardIcon className='renewal_icon' style={{fontSize:'15px'}}/></a>
                  </div>
              </div>
        </Card>
    )
}

export default DiscordID

const useStyles = makeStyles({
    root: {
      backgroundColor: '#27FFE3',
      borderRadius: '10px',
      color :'white',
      width:'82%',
      padding: '10px',
      boxSizing:'border-box'
      
      
    },
    action:{
      
    },
   
})