import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './MonitorList.css'
import {data} from '../../../../taskData1'
import MonitorData from './MonitorData/MonitorData'


const MonitorList = (props) => {
    const classes = useStyles();

    let monitorData = data.map(item =>{
      if(item.play){

         return   <span key={item.no}> 
            <MonitorData
             no={item.no}
             sku={item.sku}
             size={item.size}
             country={item.country}
             status={item.status}
             errorDelay={item.errorDelay}
             monitorDelay={item.monitorDelay}
             Play/>
       </span>
      }else{

         return   <span key={item.no}> 
            <MonitorData
             no={item.no}
             sku={item.sku}
             size={item.size}
             country={item.country}
             status={item.status}
             monitorDelay={item.monitorDelay}
             errorDelay={item.errorDelay}
             />
       </span>
        }
   })

    return (
        <Card className={classes.root} variant="outlined">
          <div className='regularList_nav'>
              <div className='regularList_nav1'>
                  <p>No.</p>
                  <p>SKU</p>
              </div>
              <div className= 'monitor_nav2'>
                  Country
              </div>
              <div className= 'monitor_nav3'>
                  <p style={{paddingLeft:'5px'}}>Size</p>
                  <p style={{paddingLeft:'25px'}}>Monitor Delay</p> 
                  <p style={{paddingRight:'5px'}}> Error Delay</p>
                  <p>Status</p>
              </div>
              <div className= 'monitor_nav4'>
                  Actions
              </div>
          </div>
        {monitorData}
        </Card>
    )
}

export default MonitorList

const useStyles = makeStyles({
    root: {
      backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      paddingBottom:'15px',
      paddingTop:'5px'
      
    },
    
})