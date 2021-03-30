import React from 'react'
import  './ModalButton.css'

const ModalButton = (props) => {
    return (
    <div>
        {props.next && <div className='modalButton_container' onClick={props.next}>
            <a className={`modalButton  ${props.gray && 'gray'}` }>{props.name}</a>
        </div>}
        {props.close && <div className='modalButton_container' onClick={props.close}>
            <a className={`modalButton  ${props.gray && 'gray'}` }>{props.name}</a>
        </div>}
        {props.back && <div className='modalButton_container' onClick={props.back}>
            <a className={`modalButton  ${props.gray && 'gray'}` }>{props.name}</a>
        </div>}
        {props.back2 && <div className='modalButton_container' onClick={props.back2}>
            <a className={`modalButton  ${props.gray && 'gray'}` }>{props.name}</a>
        </div>}
    </div>   
    )
}

export default ModalButton
