import React , {useState} from 'react'
import classes from './ProfileGroup.module.css'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProfileGroupModal from './ProfileGroupModal/ProfileGroupModal'
import ProfileCard from './ProfileCard/ProfileCard'


const ProfileGroup = (props) => {
    const [show , setShow]= useState(false);

    const closeModal = ()=> {
          setShow(false)
    };
    const openModal = ()=> {
        setShow(true)
    };

    return (
        <div className={classes.task}>
        <div className={classes.container}>
          <div className={classes.title}>
              <p className={classes.titleP}>{props.name} Group</p>
              <div className={classes.createGroup}>
                  <span className={classes.create}>Create Group</span>
                  <img src='./icons/plus.png' onClick={openModal} style={{cursor:'pointer'}}/>
              </div>
          </div>
          <ProfileCard
           title='Terminator Profile'
           subtitle='Nike Store'/>
           <ProfileCard
           title='Flazz Profile'
           subtitle='Amazon'/>
           <ProfileCard
           title='Tunder Profile'
           subtitle='Walmart'/>
           <ProfileCard
           title='Slab Profile'
           subtitle='Amazon'/>
           <ProfileCard
           title='Trinity Profile'
           subtitle='Nike Store'/>
           <ProfileCard
           title='Terminator Profile'
           subtitle='Nike Store'/>
           <ProfileCard
           title='Terminator Profile'
           subtitle='Nike Store'/>
         
        </div>
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
          <ProfileGroupModal close={closeModal}  title={props.title}/>
          </Fade>

        </Modal>}
      </div>
    )
}

export default ProfileGroup
