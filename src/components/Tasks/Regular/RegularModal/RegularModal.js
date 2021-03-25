import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './RegularModal.css'
import arrowDown from '../../../../Icons/arrowDown.svg'




const RegularModal = (props) => {
    const classes = useStyles();


    return (
        <Card className={classes.container} variant="outlined">
           <div className='regularModal'>
              <p className='regularModal_p'>Regular Task</p>
              <div className='regularModal_selectors '>
                <div className='regularModal_input_container'>
                    <p className='regularModal_label'>Proxies Group</p>
                    <a className='regularModal_input'>Select Proxies Group <img src={arrowDown} className='regularmodal_arrow'/></a>
                </div>
                <div className='regularModal_input_container'>
                    <p className='regularModal_label'>Payment Method</p>
                    <a className='regularModal_input'>Select Payment Method<img src={arrowDown} className='regularmodal_arrow'/></a>
                </div>
              </div>
              {/* <div className='regularModal_input_container'>
                  <p className='regularModal_label'>Quantity Task</p>
                  <a className='regularModal_input2'>0 0 0</a>  
              </div> */}
              <div className='regularModal_input_container'>
              <p className='regularModal_label'>Quantity Task</p>
              <input 
                    className='regularModal_input3'
                    placeholder='0 0 0'/>
              </div>
           </div>
           <div className='modalButton_container'>
               <a className='modalButton'>SUBMIT</a>
           </div>
        </Card>
    )
}

export default RegularModal

const useStyles = makeStyles({
    container: {
      backgroundColor: '#282443',
      borderRadius: '10px',
      color :'white',
      padding:'20px',
      width : '700px'

    },
    
});

