import React from 'react'
import './RegularData.css'
import play from '../../../../../Icons/play.svg'
import bucket from '../../../../../Icons/bucket.svg'
import pause from '../../../../../Icons/pause.svg'
import copy from '../../../../../Icons/copy.svg'
import edit from '../../../../../Icons/edit.svg'
import redDot from '../../../../../Icons/redDot.svg'




const RegularData = (props) => {
    return (
        <div className="regularData">
            <div className="regularData1">
                <p>{props.no}</p>
                <p>{props.sku}</p>
            </div>
            <div className="regularData3">
                {props.country}
            </div>
            <div className="regularData2">
                 <p style={{boxSizing:'border-box'}}>{props.size}</p>
                 <p >{props.payment}</p>
                 {props.monitor && <p>{props.monitorDelay}</p>}
                 {props.monitor && <p>{props.errorDelay}</p>}
                 <div className="regularData2_box">
                   <img src={redDot} className='regular_dot'/>
                    <p>{props.status}</p>
                 </div>               
            </div>
            <div className="regularData_icons">
                     <a className='regularData_icon_container'>
                         {props.Play ? <img src={play} className='regularData_icon1'/> : <img src={pause} className='regularData_icon1'/> }
                     </a>
                     <a className='regularData_icon_container'><img src={edit} className='regularData_icon'/></a>
                     <a className='regularData_icon_container'><img src={copy} className='regularData_icon'/></a>
                     <a className='regularData_icon_container'><img src={bucket} className='regularData_icon'/></a>
            </div>
        </div>
    )
}

export default RegularData
