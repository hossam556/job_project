import React from 'react'
import Dropdown from '../../../UI/Dropdown/Dropdown'
import ModalButton from '../../../UI/ModalButton/ModalButton'



const General = (props) => {

    return (
          <div className='profileModal_shipping'>
           <div className="profileModal_input_container">
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>First Name</p>
                      <input 
                            className='profileModal_Input taskPlaceholder' 
                            placeholder='Input first name'/>
                </div>
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Last Name</p>
                      <input 
                            className='profileModal_Input  taskPlaceholder' 
                            placeholder='Input last name'/>
                </div>
           </div>
           <div className="profileModal_input_container">
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Address 1</p>
                      <input 
                            className='profileModal_Input   taskPlaceholder' 
                            placeholder='Input address'/>
                </div>
                <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Address 2</p>
                      <input 
                            className='profileModal_Input taskPlaceholder' 
                            placeholder='Input address'/>
                </div>
           </div>
           <div className="profileModal_input_container">
              
               <div className='regularModal_input_container skuContainer'>
                      <p className='regularModal_label profileLable'>Zip</p>
                      <input 
                            className='profileModal_Input  taskPlaceholder' 
                            placeholder='Input zip'/>
                </div>     
              <Dropdown
                    label='Country'
                    value='Select Country'/>
           </div>
           <div className="profileModal_input_container">
               <Dropdown
                    label='State'
                    value='Select State'/>
                <Dropdown
                    label='City'
                    value='Select City'/>
           </div>
           <div className="xxx">
            <div className='profileModal_button_container shippingButton'>
                <div className='profileModal_button'>
                    <ModalButton 
                    name='BACK'
                    back={props.back}
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



