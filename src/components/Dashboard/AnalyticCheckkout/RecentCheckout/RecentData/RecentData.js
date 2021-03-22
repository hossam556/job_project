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
               <div className='recentData2'>
                 <p className='recentData_p' style={{marginLeft:'62px',fontSize:'12px',fontWeight:'400'}}>{props.profile}</p>
                 <p className='recentData_p' style={{marginLeft:'71px',fontSize:'12px',fontWeight:'400'}}>{props.proxy}</p>
                 <p className='recentData_p time' style={{marginLeft:'70px',fontSize:'12px',fontWeight:'400'}}>{props.time}</p>
                 <p className='recentData_p dollar' style={{fontWeight:'700',fontSize:'12px'}}>{props.price}</p>
               </div>
         </div>
         
              
         </div>
    )
}

export default RecentData
