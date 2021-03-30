import React , {useState} from 'react'
import Nav from '../Nav/Nav'
import './Profile.css'
import ProfileGroup from './ProfileGroup/ProfileGroup'
import bucket from '../../Icons/bucket.svg'
import plus from '../../Icons/plus.svg'
import Export from '../../Icons/Export.svg'
import ProfileList from './ProfileList/ProfileList'
import ProfileModal from './ProfileModal/ProfileModal'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Profile = () => {
    const [show , setShow]= useState(false);

    const closeModal = ()=> {
          setShow(false)
    };
    const openModal = ()=> {
        setShow(true)
    };

    return (
        <div>
            <Nav title = 'Profile'/>
            <div className='profile_container'>
                <div className='profileList'>
                   <div className='profileList_nav_container'>
                    <div className='profileList_nav'>
                        <p style={{fontSize:'16px' , fontWeight:'700'}}>Profile List</p>
                        <p style={{fontSize:'12px' , fontWeight:'400'}}><span style={{opacity:'0.4'}}>Total :</span> 36 Profile</p>
                    </div>
                   </div> 
                   <div className='profile_icons_container'>
                       <div className='profile_icons1'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={Export} className='regular_delete xx'/></a>Import</a>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={Export} className='regular_delete xx'/></a>Export</a>
                       </div>
                       <div className='profile_icons2'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={bucket} className='regular_delete xx'/></a>Delete</a>
                         <a className='regular_plus_container' ><img src={plus} className='regular_plus' onClick={openModal}/></a>
                       </div>
                   </div>
                   <ProfileList/>
                </div>
                <ProfileGroup name='Profile' title='CREATE PROFILES GROUP'/>
                {show && <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className='modaal'
                  open={show}
                  onClose={closeModal}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}>
                <Fade in={show}>
                <ProfileModal close={closeModal} />
                </Fade>

                </Modal>}
            </div>
        </div>
    )
}

export default Profile
