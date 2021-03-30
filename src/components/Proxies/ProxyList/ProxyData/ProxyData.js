import React from 'react'
import './ProxyData.css'
import bucket from '../../../../Icons/bucket.svg'
import copy from '../../../../Icons/copy.svg'
import edit from '../../../../Icons/edit.svg'
import test from '../../../../Icons/test.svg'




const ProfileData = (props) => {
    return (
        <div className="regularData">
            <div className="profileData1">
                <p>{props.no}</p>
                <p style={{textAlign:'start'  , width:'81%'}}>{props.ip}</p>
            </div>
            <div className="proxyData2_container">
                <div className="proxyData2">
                    <p>{props.port}</p>
                    <div className='proxyData_div'>
                        <p>{props.username}</p>
                        <p className='proxyData_pass' >{props.password}</p>
                        </div>
                    <p style={{color:'#FF9A3D'}}>{props.status}</p>
                </div>
                <div className="profileData_icons">
                        <a className='regularData_icon_container'><img src={test} className='regularData_icon proxyTest'/></a>
                        <a className='regularData_icon_container'><img src={bucket} className='regularData_icon'/></a>
                </div>
            </div>
        </div>
    )
}

export default ProfileData
