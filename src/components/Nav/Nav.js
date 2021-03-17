import React ,{useState} from 'react'
import './Nav.css'
import Notifications from './Notifications/Notifications'


const Nav = (props) => {

    const  [show, setShow] = useState(false);

    const notifiHandler=()=>{
        setShow(!show)
    };
  
    return (
            <div className='nav'>
              
               <div className='nav_title'>
                   <p className='nav_p'>{props.title}</p>
                   <div className='nav_icons_box'>
                         <a href='#' className='nav_icons'></a>
                         <a href='#' className='nav_icons' onClick={notifiHandler}></a>
                         <a href='#' className='nav_icons'></a>
                          <img src='./icons/what.png' className='what'/>
                          <img src='./icons/Notification.png' className='notification' onClick={notifiHandler}/>
                          <img src='./icons/avatar.png' className='avatar'/>
                   </div>
                  { show && <Notifications/>}
               </div>
            </div>
    )
}

export default Nav
