import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import RecentData from './RecentData/RecentData'
import './RecentCheckout.css'
import {data} from '../../../../data'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const RecentCheckout = () => {
    const classes = useStyles();

    let recentData = data.map(item=><li className="recentListData" key={item.no}>
        <RecentData 
         no={item.no}
         product={item.product}
         profile={item.Profile}
         proxy={item.Proxy}
         price={item.price}
         time={item.time}
         productType={item.productType}/>
    </li>)

    return (
        <Card className={classes.root} variant="outlined">
            <div className='recentCheckout_nav'>
               <div className='recentCheckout_1'>
                   <p className='recentCheckout_p1'>No.</p>
                   <p  className='recentCheckout_p1'>Product Name</p>
               </div>
               <div className='recentCheckout_pContainer'>
                  <p  className='recentCheckout_p1'>Profile Name <ArrowDropDownIcon className='recent_arrow' style={{fontSize:'15px'}}/></p>
                  <p  className='recentCheckout_p1 '>Proxy Group</p>
                  <p  className='recentCheckout_p1 time'>Time</p>
                  <p  className='recentCheckout_p1 price'>Price <ArrowDropDownIcon className='recent_arrow' style={{fontSize:'15px'}}/> </p>
               </div>
            </div>
            {recentData}
      </Card>
      );
}

export default RecentCheckout

const useStyles = makeStyles({
    root: {
    backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      marginBottom:'20px'
      
    },
   
})