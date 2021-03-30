import React , {useState} from 'react'
import Nav from '../Nav/Nav'
import './Proxies.css'
import ProfileGroup from '../Profile/ProfileGroup/ProfileGroup'
import ProxyList from './ProxyList/ProxyList'
import bucket from '../../Icons/bucket.svg'
import plus from '../../Icons/plus.svg'
import Export from '../../Icons/Export.svg'
import test from '../../Icons/test.svg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProxiesModal from './ProxiesModal/ProxiesModal'


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
                        <p style={{fontSize:'16px' , fontWeight:'700'}}>Proxy List</p>
                        <p style={{fontSize:'12px' , fontWeight:'400'}}><span style={{opacity:'0.4'}}>Total :</span> 36 Proxy</p>
                    </div>
                   </div> 
                   <div className='profile_icons_container'>
                       <div className='profile_icons1'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={Export} className='regular_delete xx'/></a>Import Proxies</a>
                       </div>
                       <div className='proxies_icons2'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={test} className='regular_delete xx yy'/></a>Test All</a>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={bucket} className='regular_delete xx'/></a>Delete</a>
                         <a className='regular_plus_container' ><img src={plus} className='regular_plus' onClick={openModal}/></a>
                       </div>
                   </div>
                   <ProxyList/>
                </div>
                <ProfileGroup name='Proxies' title='CREATE PROXIES GROUP'/>
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
                <ProxiesModal close={closeModal} />
                </Fade>

                </Modal>}
            </div>
        </div>
    )
}

export default Profile
