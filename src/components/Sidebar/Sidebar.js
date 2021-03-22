import React from 'react'
import './Sidebar.css'
import SidebarCard from './SidebarCard/SidebarCard'
import SidebarNav from './SidebarNav/SidebarNav'
import profile from '../../Icons/profile.svg'
import key from '../../Icons/key.svg'
import task from '../../Icons/task.svg'
import account from '../../Icons/account.svg'
import renewal from '../../Icons/renewal.svg'
import Setting from '../../Icons/Setting.svg'
import cloud from '../../Icons/cloud.svg'
import dash2 from '../../Icons/dash2.svg'




const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarNav/>
            <div className='sidebar_titles'>
                <div className='sidebar_title'>
                    <img src={dash2}/>
                    <span className='sidebar_name clicked'>Dashboard</span>
                    <img src='./icons/bluedote.png'  className='sidebar_dote'/>
                </div>
                <div className='sidebar_title'>
                    <img src={task}/>
                    <span className='sidebar_name'>Tasks</span>
                </div>
                <div className='sidebar_title'>
                    <img src={profile}/>
                    <span className='sidebar_name'>Profile</span>
                </div>
                <div className='sidebar_title'>
                    <img src={key}/>
                    <span className='sidebar_name'>Proxies</span>
                </div >
                <div className='sidebar_title'>
                    <img src={account}/>
                    <span className='sidebar_name'>Account</span>
                </div>
                <div className='sidebar_title'>
                    <img src={Setting}/>
                    <span className='sidebar_name'>Setting</span>
                </div>
                <div className='sidebar_title'>
                    <img src={renewal}/>
                    <span className='sidebar_name'>Revewal</span>
                </div>
            </div>
            <div className='sidebarCard_container'>
                <SidebarCard/>
                <a href='#' className='sidebar_btn'><img className='sidebar_cloud' src={cloud}/> UNBIND</a>
            </div>
        </div>
    )
}

export default Sidebar
