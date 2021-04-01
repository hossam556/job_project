import React from 'react'
import './RenewalOption.css'

export const RenewalOption = (props) => {
    return (
        <div className={`renewalOption_container ${props.color && 'renewalOption_colored'}`}>
            <p>{props.month} Months</p>
            <h1><span>$ </span>{props.price}</h1>
        </div>
    )
}

export default RenewalOption
