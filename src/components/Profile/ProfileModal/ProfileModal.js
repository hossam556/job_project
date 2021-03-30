import React , {useState} from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ProfileModal.css'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import rightBox from '../../../Icons/rightBox.svg'
import ModalButton from '../../../UI/ModalButton/ModalButton'
import pinkDot from '../../../Icons/pinkDot.svg'
import General from './General'
import Shipping from './Shipping'
import Billing from './Billing'



const MonitorModal = (props) => {
    const classes = useStyles();

    const [showGeneral , setGeneral] = useState(true);
    const [showShipping , setShipping] = useState(false);
    const [showBilling , setBilling] = useState(false);
    
    const generalHandler = ()=> {
        setGeneral(true);
        setShipping(false);
        setBilling(false);
    };
    const shippingHandler = ()=> {
        setGeneral(false);
        setShipping(true);
        setBilling(false);
    };
    const billingHandler = ()=> {
        setGeneral(false);
        setShipping(false);
        setBilling(true);
    };


    return (
        <Card className={classes.container} variant="outlined">
           <div className='taskModal' style={{marginBottom:'35px'}}>
             <p className='taskModal_title'>CREATE PROFILE</p>
             <div className="profileModal_options" >
                 <p  className={`profileModal_option ${(showShipping || showBilling ) && "generalcolored"}` } >General {showGeneral && <img src={pinkDot} className="profileModal_pinkDot"/>}</p>
                 <p className= {`profileModal_option2 ${showShipping && "shippingClicked"} ${showBilling && "generalcolored"} ` }  >shipping {showShipping && <img src={pinkDot} className="profileModal_pinkDot"/>}</p>
                 <p className={`profileModal_option3 ${showBilling && "shippingClicked"}` }  >Billing {showBilling && <img src={pinkDot} className="profileModal_pinkDot"/>}</p>
             </div>
           </div>
          {showGeneral &&  <General 
                           next={shippingHandler}
                           close={props.close}/>}
          {showShipping && <Shipping 
                            next={billingHandler}
                            back={generalHandler}/>}                   
          {showBilling && <Billing
                            back2={shippingHandler}
                            close={props.close}/>}
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
    //   height:'590px',
    //   display:'flex',
    //   flexDirection:'column',
    //   justifyContent:'space-between'
    },
    
});

