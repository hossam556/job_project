import React ,{useState} from 'react'
import './Nav.css'
import Notifications from './Notifications/Notifications'
import info from '../../Icons/info.svg'
import notifi from '../../Icons/notifi.svg'
import Ellipse from '../../Icons/Ellipse.svg'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';





const Nav = (props) => {

    const  [show, setShow] = useState(false);
    const  [showBack, setShowBack] = useState(false);


    const notifiHandler=()=>{
        setShow(!show);
        setShowBack(!showBack)
    };
    const handleClickAway= ()=> {
        setShow(false);
        setShowBack(false)
    };
  
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='nav'>           
               <div className='nav_title'>
                   <p className='nav_p'>{props.title}</p>
                   <div className='nav_icons_box'>
                         <a  className='nav_icons'></a>
                         <a  className='nav_icons ' onClick={notifiHandler}></a>
                         <a  className='nav_icons'></a>
                         {showBack && <p  className='notifi_background'></p>}
                          <img src={info} className='what'/>
                          <img src={notifi} className='notification' onClick={notifiHandler}/>
                          <img src='./icons/avatar.png' className='avatar'/>
                          <img src={Ellipse} className='ellipse' onClick={notifiHandler}/>
                   </div>
                  { show && <Notifications/>}
                  { show &&  <a className='notifi_hook'></a>}
               </div>
            </div>
        </ClickAwayListener>    
    )
}

export default Nav
