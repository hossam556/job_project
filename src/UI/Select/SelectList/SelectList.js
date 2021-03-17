import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './SelectList.css'

const useStyles = makeStyles({
    root: {
      backgroundColor: '#312C4E',
      borderRadius: '10px',
      color :'white',
    //   padding :'20px',
      width:'107px',
      height:'96px',
      position:'absolute',
      top:'40px',
      left:'-45px',
      zIndex:'10',
      boxSizing:'border-box',
      display:'flex',
      flexDirection:'column',
    //   justifyContent:'center',
      alignItems:'flex-end'
    },
    
})

const SelectList = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
               <p onClick={props.dailyHandle} className='selectListP'>{props.period}</p>
               <p onClick={props.weeklyHandle} className='selectListP'>Monthly</p>
               <p onClick={props.monthlyHandle} className='selectListP'>Yearly</p>

        </Card>
    )
}

export default SelectList