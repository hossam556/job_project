import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './TaskCard.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const TaskCard = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
           <div className='taskCard_title'>
               <p style={{fontWeight:'700', fontSize:'16px'}}>Nike Group</p>
               <div className='taskicons_box'>
                   <a className='taskicons'></a>
                   <a className='taskicons'></a>
                   <a className='taskicons'></a>
                   <img src='./icons/copy.png' className='taskicon1'/>
                   <img src='./icons/pin.png' className='taskicon2'/>
                   <img src='./icons/basket.png' className='taskicon3'/>
               </div>
           </div>
           <div className='taskCard_content'>
               <div>
                   <span style={{fontSize:'12px' , fontWeight:'600'}}>Play Station 5</span><br/>
                   <span className="task_walmart">Walmart</span>
               </div>
               <a className='task_arrow'> <ExpandMoreIcon className='expandMore' style={{fontSize:'18px'}}/></a>
           </div>

        </Card>
    )
}

export default TaskCard

const useStyles = makeStyles({
    root: {
      backgroundColor: '#17142C',
      borderRadius: '10px',
      color :'white',
      marginBottom:'20px'
    },
    
})