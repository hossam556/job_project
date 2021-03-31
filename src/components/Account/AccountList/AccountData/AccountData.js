import React from 'react'
import './AccountData.css'
import bucket from '../../../../Icons/bucket.svg'
import copy from '../../../../Icons/copy.svg'
import edit from '../../../../Icons/edit.svg'




const ProfileData = (props) => {
    return (
        <div className="regularData">
            <div className="profileData1">
                <p>{props.no}</p>
                <p style={{textAlign:'start'  , width:'81%'}}>{props.email}</p>
            </div>
            <div className="accountData2_container">
                <div className="profileData2">
                    <p>{props.password}</p>
                </div>
                <div className="profileData_icons">
                        <a className='regularData_icon_container'><img src={edit} className='regularData_icon'/></a>
                        <a className='regularData_icon_container'><img src={bucket} className='regularData_icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileData
