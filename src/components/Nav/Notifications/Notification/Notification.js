import React from 'react'
import classes from './Notification.module.css'

const Notification = (props) => {
    return (
       <React.Fragment>
        <div className={classes.container}>
            <div className={classes.header}>
                <p className={classes.p1}>{props.head1}</p>
                <p className={classes.p2}>{props.date1}</p>
            </div>
            <p className={classes.p3}>{props.text1}</p>
        </div>
        <div className={classes.container}>
            <div className={classes.header}>
                <p className={classes.p4}>{props.head2}</p>
                <p className={classes.p2}>{props.date2}</p>
            </div>
            <p className={classes.p3}>{props.text2}</p>
        </div>
        </React.Fragment> 
    )
}

export default Notification
