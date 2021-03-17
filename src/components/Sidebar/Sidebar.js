import React from 'react'
import './Sidebar.css'
import SidebarCard from './SidebarCard/SidebarCard'
import SidebarNav from './SidebarNav/SidebarNav'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarNav/>
            <div className='sidebar_titles'>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1016.png'/>
                    <span className='sidebar_name'>Dashboard</span>
                </div>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1023.png'/>
                    <span className='sidebar_name'>Tasks</span>
                </div>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1018.png'/>
                    <span className='sidebar_name'>Profile</span>
                </div>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1020.png'/>
                    <span className='sidebar_name'>Proxies</span>
                </div >
                <div className='sidebar_title'>
                    <img src='./icons/Group 1022.png'/>
                    <span className='sidebar_name'>Account</span>
                </div>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1021.png'/>
                    <span className='sidebar_name'>Setting</span>
                </div>
                <div className='sidebar_title'>
                    <img src='./icons/Group 1019.png'/>
                    <span className='sidebar_name'>Revewal</span>
                </div>
            </div>
            <div className='sidebarCard_container'>
                <SidebarCard/>
                <a href='#' className='sidebar_btn'><img className='sidebar_cloud' src='./icons/cloud.png'/> UNBIND</a>
            </div>
        </div>
    )
}

export default Sidebar
