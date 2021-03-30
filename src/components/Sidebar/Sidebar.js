import React , {useState} from 'react'
import './Sidebar.css'
import {NavLink , Link} from 'react-router-dom'
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
import blueDot from '../../Icons/blueDot.svg'
import profile2 from '../../Icons/profile2.svg'
import proxies2 from '../../Icons/proxies2.svg'
import task2 from '../../Icons/task2.svg'
import account2 from '../../Icons/account2.svg'
import revewal2 from '../../Icons/revewal2.svg'
import setting2 from '../../Icons/setting2.svg'
import dash from '../../Icons/dash.svg'





const Sidebar = () => {
    const [showDashboard , setDashboard]= useState(true);
    const [showTasks , setTasks]= useState(false);
    const [showProfile , setProfile]= useState(false);
    const [showProxies , setProxies]= useState(false);
    const [showAccount , setAccount]= useState(false);
    const [showSetting , setSetting]= useState(false);
    const [showRevewal , setRevewal]= useState(false);

    const dashboardHandler = ()=>{
            setDashboard(true);
            setTasks(false);
            setProfile(false);
            setProxies(false);
            setAccount(false);
            setSetting(false);
            setRevewal(false);
    };
    const tasksHandler = ()=>{
        setDashboard(false);
        setTasks(true);
        setProfile(false);
        setProxies(false);
        setAccount(false);
        setSetting(false);
        setRevewal(false);
    };
    const profileHandler = ()=>{
        setDashboard(false);
        setTasks(false);
        setProfile(true);
        setProxies(false);
        setAccount(false);
        setSetting(false);
        setRevewal(false);
    };
    const proxiesHandler = ()=>{
        setDashboard(false);
        setTasks(false);
        setProfile(false);
        setProxies(true);
        setAccount(false);
        setSetting(false);
        setRevewal(false);
    };
    const accountHandler = ()=>{
        setDashboard(false);
        setTasks(false);
        setProfile(false);
        setProxies(false);
        setAccount(true);
        setSetting(false);
        setRevewal(false);
    };
    const settingHandler = ()=>{
        setDashboard(false);
        setTasks(false);
        setProfile(false);
        setProxies(false);
        setAccount(false);
        setSetting(true);
        setRevewal(false);
    };
    const revewalHandler = ()=>{
        setDashboard(false);
        setTasks(false);
        setProfile(false);
        setProxies(false);
        setAccount(false);
        setSetting(false);
        setRevewal(true);
    };

    return (
        <div className='sidebar'>
            <SidebarNav/>
            <div className='sidebar_titles'>
                    <div className='sidebar_title'>
                        { showDashboard ? <img src={dash2}/> : <img src={dash}/>}
                        <NavLink to='/' style={{ textDecoration:'none' , color:'white'}}>
                            <span  className={`sidebar_name ${showDashboard && ' clicked' }`} onClick={dashboardHandler}>Dashboard</span>
                        </NavLink>
                            { showDashboard && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                    </div>
               
                    <div className='sidebar_title'>
                        {showTasks ? <img src={task2} className='colored_icon'/> : <img src={task}/>}
                        <NavLink to='/tasks' style={{ textDecoration:'none' , color:'white'}}>
                            <span  className={`sidebar_name ${showTasks && ' clicked' }`}  onClick={tasksHandler}>Tasks</span>
                        </NavLink>
                            { showTasks && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                    </div>
                    <div className='sidebar_title'>
                        {showProfile ? <img src={profile2} className='colored_icon'/>  : <img src={profile}/>}
                        <NavLink to='/profile' style={{ textDecoration:'none' , color:'white'}} >
                          <span className={`sidebar_name ${showProfile && ' clicked' }`}  onClick={profileHandler}>Profile</span>
                        </NavLink>
                        { showProfile && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                    </div>
                    <div className='sidebar_title'>
                        {showProxies ?  <img src={proxies2} className='colored_icon'/> : <img src={key}/>}
                        <NavLink to='/proxies' style={{ textDecoration:'none' , color:'white'}}>
                        <span className={`sidebar_name ${showProxies && ' clicked' }`} onClick={proxiesHandler}>Proxies</span>
                        </NavLink>
                        { showProxies && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                    </div >
               
                <div className='sidebar_title'>
                    {showAccount ? <img src={account2} className='colored_icon'/> : <img src={account}/>}
                    <span className={`sidebar_name ${showAccount && ' clicked' }`}  onClick={accountHandler}>Account</span>
                    { showAccount && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                </div>
                <div className='sidebar_title'>
                    {showSetting ? <img src={setting2} className='setting_icon'/> : <img src={Setting}/>}
                    <span className={`sidebar_name ${showSetting && ' clicked' }`}  onClick={settingHandler}>Setting</span>
                    { showSetting && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
                </div>
                <div className='sidebar_title'>
                   {showRevewal ? <img src={revewal2} className='colored_icon'/> : <img src={renewal}/>}
                    <span className={`sidebar_name ${showRevewal && ' clicked' }`}  onClick={revewalHandler}>Revewal</span>
                    { showRevewal && <img src='./icons/bluedote.png'  className='sidebar_dote'/>}
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
