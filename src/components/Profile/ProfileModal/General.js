import React from 'react'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import rightBox from '../../../Icons/rightBox.svg'
import ModalButton from '../../../UI/ModalButton/ModalButton'



const General = (props) => {

    return (
          <div className='profileModal_general'>
           <div>
              <div className='generalModal_input_container '>
                <p className='regularModal_label profileLable'>Profile Name</p>
                <input 
                    className='regularModal_input3 profileInput'
                    placeholder='Selena Gomez'/>
              </div>
           </div>
           <div className="profileModal_input_container">
                <div className='regularModal_input_container skuContainer '>
                      <p className='regularModal_label profileLable'>Email Address</p>
                      <input 
                            className='profileModal_Input  ' 
                            placeholder='selena.gomez@gmail.com'/>
                </div>
                <div className='regularModal_input_container skuContainer '>
                      <p className='regularModal_label profileLable'>Phone Number</p>
                      <input 
                            className='profileModal_Input  ' 
                            placeholder='0789248353'/>
                </div>
           </div>
           <div className="profileModal_input_container">
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Card Number</p>
                      <input 
                            className='profileModal_Input  ' 
                            placeholder='selena.gomez@gmail.com'/>
                </div>
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Card Holder Name</p>
                      <input 
                            className='profileModal_Input  ' 
                            placeholder='0789248353'/>
                </div>
           </div>
           <div className="profileModal_input_container">
              <Dropdown
                    label='Expiry Month'
                    value='04'/>
              <Dropdown
                    label='Expiry Year'
                    value='2024'/>
           </div>
           <div className="profileModal_input_container">
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>CVV</p>
                      <input 
                            className='profileModal_Input ' 
                            placeholder='545'/>
                </div>
                <Dropdown
                    label='Card Type'
                    value='Master Card'/>
           </div>
           <div className="xxx">
            <div className="profileModal_input_container">
                    <div  className="profileModal_rightbox">
                        <img src={rightBox} style={{paddingRight:'10px'}}/>
                        <p>Billing Same as Shipping</p>
                    </div>
                    <div  className="profileModal_rightbox2">
                        <img src={rightBox}  style={{paddingRight:'10px'}}/>
                        <p >One Checkout per Profile</p>
                    </div>
            </div>
            <div className='profileModal_button_container'>
                <div className='profileModal_button'>
                    <ModalButton 
                    name='CANCEL'
                    close={props.close}
                    gray/>
                    <ModalButton 
                    name='NEXT'
                    next={props.next}/>
                </div>
            </div>
           </div>
        </div> 
    )
}

export default General



