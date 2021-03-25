import React ,{useState}from 'react'
import './Monitor.css'
import play from '../../../Icons/play.svg'
import pause from '../../../Icons/pause.svg'
import bucket from '../../../Icons/bucket.svg'
import plus from '../../../Icons/plus.svg'
import MonitorList from './MonitorList/MonitorList'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MonitorModal from './MonitorModal/MonitorModal'


const Monitor = () => {
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
                <div className='monitor_navIcons'>
                     {/* <a className='regular_share_container'><a className='regular_share_container2'><img src={share} className='regular_share'/></a>Share</a> */}
                     <a className='regular_play_container'><a className='regular_play_container2'><img src={play} className='regular_play'/></a>Play</a>
                     <a className='regular_pause_container'><a className='regular_pause_container2'><img src={pause} className='regular_pause'/></a>Pause</a>
                     <a className='regular_delete_container'><a className='regular_delete_container2'><img src={bucket} className='regular_delete'/></a>Delete</a>
                     <a className='regular_plus_container' onClick={openModal}><img src={plus} className='regular_plus'/></a>
                </div>
            </div>
            <MonitorList/>
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
            <MonitorModal close={closeModal} />
            </Fade>

          </Modal>}
        </div>
    )
}

export default Monitor
