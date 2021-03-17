import React from 'react'
import './Layout.css'
import Sidebar from '../components/Sidebar/Sidebar';


const Layout = (props) => {
  
    return (
            <div className='layout'>
                <Sidebar/>
                <div className='main'>{props.children}</div>
            </div>
    )
}

export default Layout