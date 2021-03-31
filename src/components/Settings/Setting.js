import React , {useState} from 'react'
import Nav from '../Nav/Nav'
import './Setting.css'
import Test2 from '../../Icons/Test2.svg'



const Account = () => {

    return (
        <div>
            <Nav title = 'Setting'/>
            <div className='profile_container'>
                <div className='profileList'>
                   <div className='setting_nav_container'>
                    <div className='settingList_nav'>
                        <p >Webhook</p>
                        <p>Send checkout and decline notifications</p>
                    </div>
                    <div className='modalButton_container' >
                       <a className="settingButton"><img src={Test2} className="settingButtonIcon"/>TEST</a>
                     </div>
                   </div> 
                   <div className='settingInput_container'>
                      <div className=' skuContainer'>
                         <p className='regularModal_label profileLable settingLabel'>Posotive Webhook</p>
                         <input 
                             className='profileModal_Input taskPlaceholder settingInput' 
                             placeholder='Positive webhook'/>
                      </div> 
                      <div className=' skuContainer'>
                        <p className='regularModal_label profileLable settingLabel'>Negative Webhook</p>
                        <input 
                            className='profileModal_Input taskPlaceholder settingInput2' 
                            placeholder='Negative webhook'/>
                     </div>         
                   </div>
                </div>

            </div>
        </div>
    )
}

export default Account
