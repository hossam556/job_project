import React, {useState} from 'react'
import './Regular.css'
import share from '../../../Icons/share.svg'
import play from '../../../Icons/play.svg'
import pause from '../../../Icons/pause.svg'
import bucket from '../../../Icons/bucket.svg'
import plus from '../../../Icons/plus.svg'
import RegularList from './RegularList/RegularList'
import Modal from '@material-ui/core/Modal';
import RegularModal from './RegularModal/RegularModal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';



const Regular = () => {
    const [show , setShow]= useState(false);

    const closeModal = ()=> {
          setShow(false)
    };
    const openModal = ()=> {
        setShow(true)
  };

    return (
        <div>
            <div className="regular_nav">
                <div className="regular_nav1">
                    <p className='regular_p1'>Task List</p>
                    <p className='regular_p2'><span className='regular_p3'>Total </span>: 12 Task</p>
                </div>
                <div className='regular_navIcons'>
                     <a className='regular_share_container'><a className='regular_share_container2'><img src={share} className='regular_share'/></a>Share</a>
                     <a className='regular_play_container'><a className='regular_play_container2'><img src={play} className='regular_play'/></a>Play</a>
                     <a className='regular_pause_container'><a className='regular_pause_container2'><img src={pause} className='regular_pause'/></a>Pause</a>
                     <a className='regular_delete_container'><a className='regular_delete_container2'><img src={bucket} className='regular_delete'/></a>Delete</a>
                     <a className='regular_plus_container' onClick={openModal}><img src={plus} className='regular_plus'/></a>
                </div>
            </div>
            <RegularList/>
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
            <RegularModal close={closeModal} />
            </Fade>

          </Modal>}
        </div>
    )
}

export default Regular
