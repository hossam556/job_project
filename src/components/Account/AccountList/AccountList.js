import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './AccountList.css'
import AccountData from './AccountData/AccountData'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {data} from '../../../accountData2'

const AccountList = (props) => {
    const classes = useStyles();

    let accountData = data.map(item => 
            <span key={item.no}>
                <AccountData
                 no={item.no}
                 email={item.email}
                 password={item.password}/>
            </span>) 

    return (
        <Card className={classes.root} variant="outlined">
          <div className='regularList_nav'>
              <div className='ProfileList_nav1'>
                  <p>No.</p>
                  <p style={{position:'relative'}}>Email <ArrowDropDownIcon className='profileList_arrow1' style={{fontSize:'18px'}}/></p>
              </div>
              <div className= 'accountList_nav2'>
                 <p style={{position:'relative'}}>Password <ArrowDropDownIcon className='profileList_arrow2' style={{fontSize:'18px'}}/></p>
                 <p>Actions</p>
              </div>
          </div>
          {accountData}
        </Card>
    )
}

export default AccountList

const useStyles = makeStyles({
    root: {
      backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      paddingBottom:'10px',
      paddingTop:'5px'
      
    },
    
})