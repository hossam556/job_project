import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './TaskModal.css'
import arrowDown from '../../../../Icons/arrowDown.svg'
import x from '../../../../Icons/x.svg'
import Slider from '../../../../UI/Slider/Slider'
import Dropdown from '../../../../UI/Dropdown/Dropdown'
import ModalButton from '../../../../UI/ModalButton/ModalButton'




const MonitorModal = (props) => {
    const classes = useStyles();


    return (
        <Card className={classes.container} variant="outlined">
           <div className='taskModal'>
             <p className='taskModal_title'>CREATE TASK GROUP</p>
             <a className='taskModal_x'><img src={x} className='taskModal_x1' onClick={props.close}/></a>
           </div>
           <div className='taskModal2'>
              <div className='regularModal_input_container'>
                     <p className='regularModal_label'>Group Name</p>
                    <input 
                        className='regularModal_input3 taskPlaceholder' 
                        placeholder='Input group name'/>
              </div>
           </div>
           <div className='taskModal3'>
              <p className='taskModal3_p'>Global Task</p>
              <div className='taskModal3_1'>
                    <Dropdown
                    label='Store'
                    value='Select Store'/>
                    <div className='regularModal_input_container skuContainer '>
                      <p className='regularModal_label'>Product SKU</p>
                      <input 
                            className='taskModal_Input taskPlaceholder' 
                            placeholder='Input Product SKU'/>
                     </div>
              </div>
              <div className='taskModal3_1'>
                    <Dropdown
                    label='Country'
                    value='Select Country'/>
                    <Dropdown
                    label='Profile Group'
                    value='Select Profile Group'/>
              </div>
              <div className='taskModal3_slider'>
                  <p>Select Size :</p>
                   <Slider/>
                   <p>Random Size</p>
              </div>
           </div>
           <div style={{marginTop:'25px'}}>
              <ModalButton
                name="SUBMIT"
                close={props.close}/>
           </div>
        </Card>
    )
}

export default MonitorModal

const useStyles = makeStyles({
    container: {
      backgroundColor: '#282443',
      borderRadius: '10px',
      color :'white',
      padding:'25px',
      width : '700px',
      height:'590px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    },
    
});

