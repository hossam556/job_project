import React from 'react'
import './RecentData.css'

const RecentData = (props) => {
    return (
        <div className='recentData_cont'>
         <div className="recentData">
               <div className='recentData1'>
                   <p  style={{fontSize:'12px',fontWeight:'400'}}>{props.no}</p>
                   <div className='playstation'>
                    <span  style={{fontSize:'12px',fontWeight:'600'}}>{props.product}</span><br/>
                    <span  style={{fontSize:'12px',fontWeight:'400' ,opacity:'0.4'}}>{props.productType}</span>
                   </div>
               </div>
               <p className='recentData_p' style={{marginLeft:'62px'}}>{props.profile}</p>
               <p className='recentData_p' style={{marginLeft:'69px'}}>{props.proxy}</p>
               <p className='recentData_p' style={{marginLeft:'70px'}}>{props.time}</p>
               <p className='recentData_p' style={{fontWeight:'700'}}>{props.price}</p>
         </div>
         
              
         </div>
    )
}

export default RecentData
