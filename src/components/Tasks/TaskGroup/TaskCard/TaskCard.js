import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './TaskCard.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import copy from '../../../../Icons/copy.svg'
import edit from '../../../../Icons/edit.svg'
import bucket from '../../../../Icons/bucket.svg'


const TaskCard = (props) => {
    // const classes = useStyles();

    const [show , setShow] = useState(false);

    const sliderHandler = ()=>{
        setShow(!show)
    }



    return (
        // <Card className={classes.root} variant="outlined">
        <div className={`taskcard_container ${ show && 'newBackground'}`}>
           <div className='taskCard_title'>
               <p style={{fontWeight:'700', fontSize:'16px' , letterSpacing:'0.5px'}}>Nike Group {props.title}</p>
               <div className='taskicons_box'>
                   <a className='taskicons'><img src={copy} className='taskicon1'/></a>
                   <a className='taskicons'><img src={edit} className='taskicon2'/></a>
                   <a className='taskicons'><img src={bucket} className='taskicon3'/></a>
                   
                   
                   
               </div>
           </div>
           <div className='taskCard_content'>
               <div>
                   <span style={{fontSize:'12px' , fontWeight:'600',letterSpacing:'0.7px'}}>Play Station 5</span><br/>
                   <span className="task_walmart">Walmart</span>
               </div>
               <a className={`task_arrow ${ show && 'task_light'}`} onClick={sliderHandler}> {show ?<ExpandLessIcon className='expandMore' style={{fontSize:'18px'}}/> 
                                                                  : <ExpandMoreIcon className='expandMore' style={{fontSize:'18px'}}/>}</a>
           </div>
           {show && <div className='task_slider'>
                <div style={{textAlign:'center'}}>
                    <p className='task_slider_p'>Proxies Group</p>
                    <p className='task_slider_p1'>Terminator</p>
                </div>
                <div>
                <div style={{textAlign:'center'}}>
                    <p className='task_slider_p'>Profile Group</p>
                    <p className='task_slider_p1'>Profile 1</p>
                </div>
                </div>
           </div>}
        </div>
        // </Card>
    )
}

export default TaskCard

// const useStyles = makeStyles({
//     root: {
//     //   backgroundColor: '#17142C',
//     //   borderRadius: '10px',
//     //   backgroundColor:'#312C4E',
//       color :'white',
//       marginBottom:'20px',
//     //   paddingBottom:'15px'
//     },
//     slider:{
//         backgroundColor:'#312C4E',
//     }
// })