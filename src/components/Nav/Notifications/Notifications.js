import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './Notifications.css'
import Notification from './Notification/Notification'
import {notifData} from '../../../NotificationData'

const useStyles = makeStyles({
    root: {
      backgroundColor: '#312C4E',
      borderRadius: '10px',
      color :'white',
      padding :'0px 10px',
      position:'absolute',
      top:'65px',
      left:'77%',
      zIndex:'10',
      maxWidth:'244px',
      // overflowY:'scroll',
      // overflowX:'hidden',
      // maxHeight:'262px',
      
    //   boxSizing:'border-box',
    },
    
})

const Notifications = (props) => {
    const classes = useStyles();

    let notifications = notifData.map(item=><span>
          <Notification
            head1={item.head1}
            date1={item.date1}
            text1={item.text1}
            head2={item.head2}
            date2={item.date2}
            text2={item.text2}/>
    </span>)

    return (
        <Card className={classes.root} variant="outlined">
          <div className='notifi_container'>
               {notifications}
          </div>     
        </Card>
    )
}

export default Notifications