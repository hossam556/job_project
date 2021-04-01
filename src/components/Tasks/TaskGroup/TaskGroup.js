import React , {useState} from 'react'
import classes from './TaskGroup.module.css'
import TaskCard from './TaskCard/TaskCard'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TaskModal from './TaskModal/TaskModal'

const TaskGroup = () => {
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
                <p className={classes.titleP}>Tasks Group</p>
                <div className={classes.createGroup}>
                    <span className={classes.create}>Create Group</span>
                    <img src='./icons/plus.png' onClick={openModal} style={{cursor:'pointer'}}/>
                </div>
            </div>
            <TaskCard/>
            <TaskCard 
             title='#1'/>
            <TaskCard
             title='#2'/>
            <TaskCard  title='#3'/>
            <TaskCard   title='#4'/>
            <TaskCard   title='#5'/>
            <TaskCard   title='#6'/>
            <TaskCard   title='#7'/>
            <TaskCard   title='#8'/>
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
            <TaskModal close={closeModal} />
            </Fade>

          </Modal>}
        </div>
    )
}

export default TaskGroup
