import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ProxiesModal.css'
import x from '../../../Icons/x.svg'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import ModalButton from '../../../UI/ModalButton/ModalButton'



const MonitorModal = (props) => {
    const classes = useStyles();


    return (
        <Card className={classes.container} variant="outlined">
           <div className='taskModal'>
             <p className='taskModal_title'>{props.title}</p>
             <a className='taskModal_x'><img src={x} className='taskModal_x1' onClick={props.close}/></a>
           </div>
           <div className='proxiesModal_input_container '>
                     <p className='regularModal_label profileLable'>Add Proxies</p>
                     {/* <input 
                           className='proxiesModal_input taskPlaceholder2' 
                           placeholder='IP : PORT'/> */}
                           <textarea className='proxiesModal_input' placeholder='IP:PORT'>
                                  
                           </textarea>
            </div>     
          <div className='profileModal_button_container shippingButton'>
                <ModalButton 
                    close={props.close}
                    name='SUBMIT'/>
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
      height:'440px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between'
    },
    
});

