import React , {useState} from 'react'
import Nav from '../Nav/Nav'
import './Account.css'
import AccountGroup from './AccountGroup/AccountGroup'
import AccountList from './AccountList/AccountList'
import ProxiesModal from '../Proxies/ProxiesModal/ProxiesModal'
import bucket from '../../Icons/bucket.svg'
import plus from '../../Icons/plus.svg'
import Export from '../../Icons/Export.svg'
import test from '../../Icons/test.svg'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const Account = () => {
    const [show , setShow]= useState(false);

    const closeModal = ()=> {
          setShow(false)
    };
    const openModal = ()=> {
        setShow(true)
    };

    return (
        <div>
            <Nav title = 'Account'/>
            <div className='profile_container'>
                <div className='profileList'>
                   <div className='profileList_nav_container'>
                    <div className='accountList_nav'>
                        <p style={{fontSize:'16px' , fontWeight:'700'}}>Accounts List</p>
                        <p style={{fontSize:'12px' , fontWeight:'400'}}><span style={{opacity:'0.4'}}>Total :</span> 36 Accounts</p>
                    </div>
                   </div> 
                   <div className='profile_icons_container'>
                       <div className='profile_icons1'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={Export} className='regular_delete xx'/></a>Import Accounts</a>
                       </div>
                       <div className='account_icons2'>
                         <a className='regular_delete_container'><a className='regular_delete_container2'><img src={bucket} className='regular_delete xx'/></a>Delete All</a>
                         <a className='regular_plus_container' ><img src={plus} className='regular_plus' onClick={openModal}/></a>
                       </div>
                   </div>
                   <AccountList/>
                </div>
                <AccountGroup/>
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
                <ProxiesModal close={closeModal}  title='ADD ACCOUNTS'/>
                </Fade>

                </Modal>}
            </div>
        </div>
    )
}

export default Account
