import React from 'react'
import './ProfileData.css'
import bucket from '../../../../Icons/bucket.svg'
import copy from '../../../../Icons/copy.svg'
import edit from '../../../../Icons/edit.svg'




const ProfileData = (props) => {
    return (
        <div className="regularData">
            <div className="profileData1">
                <p>{props.no}</p>
                <p style={{textAlign:'start'  , width:'81%'}}>{props.name}</p>
            </div>
            <div className="profileData2_container">
                <div className="profileData2">
                    <p>{props.email}</p>
                    <p>{props.card}</p>
                </div>
                <div className="profileData_icons">
                        <a className='regularData_icon_container'><img src={edit} className='regularData_icon'/></a>
                        <a className='regularData_icon_container'><img src={copy} className='regularData_icon'/></a>
                        <a className='regularData_icon_container'><img src={bucket} className='regularData_icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileData
