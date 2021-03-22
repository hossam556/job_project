import React from 'react'
import './CalendarItem.css'

const CalendarItem = (props) => {
    return (
        <div className='calendarItem_container' onClick={props.choose}>
            <a className='calendarItem'>{props.name}</a>
        </div>
    )
}

export default CalendarItem