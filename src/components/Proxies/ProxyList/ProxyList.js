import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ProxyList.css'
import ProxyData from './ProxyData/ProxyData'
import {data} from '../../../proxyData2'

const ProxyList = (props) => {
    const classes = useStyles();

    let proxyData = data.map(item => 
            <span key={item.no}>
                <ProxyData
                 no={item.no}
                 ip={item.ip}
                 port={item.port}
                 username={item.username}
                 password={item.password}
                 status={item.status}/>
            </span>) 

    return (
        <Card className={classes.root} variant="outlined">
          <div className='regularList_nav'>
              <div className='ProxyList_nav1'>
                  <p>No.</p>
                  <p>IP</p>
              </div>
              <div className= 'ProxyList_nav2'>
                 <p>Port</p>
                 <p>Username</p>
                 <p>Password</p>
                 <p style={{position:'relative'}}>Status <span className='proxy_status'>(speed)</span></p>
                 <p>Actions</p>
              </div>
          </div>
          {proxyData}
        </Card>
    )
}

export default ProxyList

const useStyles = makeStyles({
    root: {
      backgroundColor: '#1F1B37',
      borderRadius: '10px',
      color :'white',
      paddingBottom:'10px',
      paddingTop:'5px'
      
    },
    
})