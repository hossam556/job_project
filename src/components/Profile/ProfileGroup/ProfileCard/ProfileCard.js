import React , {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './ProfileCard.css'
import copy from '../../../../Icons/copy.svg'
import edit from '../../../../Icons/edit.svg'
import bucket from '../../../../Icons/bucket.svg'


const ProfileCard = (props) => {

   

    return (
        <div className="taskcard_container" >
           <div className='profileCard_title_container'>
           <div className='profileCard_title'>
               <p style={{fontWeight:'700', fontSize:'16px' , letterSpacing:'0.5px' , margin:'0px'}}> {props.title}</p>
               <div className='taskicons_box'>
                   <a className='taskicons'><img src={copy} className='taskicon1'/></a>
                   <a className='taskicons'><img src={edit} className='taskicon2'/></a>
                   <a className='taskicons'><img src={bucket} className='taskicon3'/></a>    
               </div>
            </div> 
            <span className='profileCard_span'>{props.subtitle}</span>
           </div>
           <div className='profileCard_content_container'>
               <div className='profileCard_content'>
                     <p className='profileCard_content_p1'>Proxies Total :</p>
                     <p className='profileCard_content_p2'>36<span className='profileCard_content_p3'>profie</span></p>
               </div>
           </div>
        </div>
    )
}

export default ProfileCard
