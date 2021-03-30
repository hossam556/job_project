import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ProfileList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ProfileData from './ProfileData/ProfileData'
import {data} from '../../../profileData2'

const MonitorList = (props) => {
    const classes = useStyles();

    let profileData = data.map(item => 
            <span key={item.no}>
                <ProfileData
                 no={item.no}
                 name={item.name}
                 email={item.email}
                 card={item.card}/>
            </span>) 

    return (
        <Card className={classes.root} variant="outlined">
          <div className='regularList_nav'>
              <div className='ProfileList_nav1'>
                  <p>No.</p>
                  <p style={{position:'relative'}}>Name <ArrowDropDownIcon className='profileList_arrow1' style={{fontSize:'18px'}}/></p>
              </div>
              <div className= 'ProfileList_nav2'>
                 <p style={{position:'relative'}}>Email Adress <ArrowDropDownIcon className='profileList_arrow2' style={{fontSize:'18px'}}/></p>
                 <p>Card Number</p>
                 <p>Actions</p>
              </div>
          </div>
          {profileData}
        </Card>
    )
}

export default MonitorList

const useStyles = makeStyles({
    root: {
      backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      paddingBottom:'10px',
      paddingTop:'5px'
      
    },
    
})