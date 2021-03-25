import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './RegularList.css'
import RegularData from './RegularData/RegularData'
import {data} from '../../../../taskData1'


const RegularList = (props) => {
    const classes = useStyles();

    let regularData = data.map(item =>{
      if(item.play){

         return   <span key={item.no}> 
            <RegularData
             no={item.no}
             sku={item.sku}
             size={item.size}
             country={item.country}
             payment={item.payment}
             status={item.status}
             Play/>
       </span>
      }else{

         return   <span key={item.no}> 
            <RegularData
             no={item.no}
             sku={item.sku}
             size={item.size}
             country={item.country}
             payment={item.payment}
             status={item.status}
             monitorDelay={item.monitorDelay}
             errorDelay={item.errorDelay}
             monitor={props.monitor}
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
              <div className={`regularList_nav2 ${props.monitor && 'monitor_nav2' }`}>
                  Country
              </div>
              <div className={`regularList_nav3 ${props.monitor && 'monitor_nav3' }`}>
                  <p style={{paddingLeft:'2px'}}>Size</p>
                  {props.monitor ?<p>Monitor Delay</p> : <p style={{paddingLeft:'27px'}}> Payment Method</p>}
                  {props.monitor && <p > Error Delay</p>}
                  <p style={{paddingRight:'5px'}}>Status</p>
              </div>
              <div className={`regularList_nav4 ${props.monitor && 'monitor_nav4' }`}>
                  Actions
              </div>
          </div>
        {regularData}
        </Card>
    )
}

export default RegularList

const useStyles = makeStyles({
    root: {
      backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      paddingBottom:'15px',
      paddingTop:'5px'

    },
    
})