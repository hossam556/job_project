import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './sidebarCard.css'



const DiscordID = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
              <div >
                  <span style={{fontSize:'12px'}}>Lisence Key</span><br/>
                  <div className='sidebarCard_cont'>
                  <a href='#' className='sidebarCard_btn1'>XXXX-XXXX-XXXX-XXXX<span href='#' className='sidebarCard_icon'>icon</span></a>
                    </div>
                  <p style={{fontSize:'12px'}}>Expiration</p>
                  <p className='sidebar_date'>Oct 20, 2021</p>
                  <a className='sidebarCard_btn2'> Renewal<span>icon</span></a>
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
      width:'208px',
      padding: '10px',
      boxSizing:'border-box'
      
      
    },
    action:{
      
    },
   
})