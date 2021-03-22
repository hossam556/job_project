import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../../Select2/SelectList2/SelectList2.css'

const useStyles = makeStyles({
    root: {
      backgroundColor: '#312C4E',
      borderRadius: '10px',
      color :'white',
      width:'107px',
      height:'auto',
    //   position:'absolute',
      padding:'5px 0px',
    //   top:'66%',
    //   right:'15px',
      zIndex:10,
      boxSizing:'border-box',
      display:'flex',
      flexDirection:'column',
      textAlign:'start'
    },
    
})

const SelectList = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
               <p onClick={props.dailyHandle} className='selectListP'>{props.day}</p>
               <p onClick={props.weeklyHandle} className='selectListP'>{props.month}</p>
               <p onClick={props.monthlyHandle} className='selectListP'>{props.year}</p>
               <p onClick={props.anyHandle} className='selectListP'>Any Time</p>
        </Card>
    )
}

export default SelectList