import React , {useState} from 'react'
import './Tasks.css'
import Nav from '../Nav/Nav'
import TaskGroup from './TaskGroup/TaskGroup'
import Regular from './Regular/Regular'
import Monitor from './Monitor/Monitor'

const Tasks = () => {
    const [showRegular, setShowRegular] = useState(true);
    const [showMonitor, setShowMonitor] = useState(false);

    const regularHandler = ()=>{
        setShowRegular(true);
        setShowMonitor(false)
    };
    const monitorHandler = ()=>{
        setShowRegular(false);
        setShowMonitor(true)
    };

    return (
        <div >
            <Nav title='Tasks'/>
            <div className="tasks_container">
                <div className="taskList">
                    <div className="task_navCont">
                       <div className='task_nav'>
                           <p className={`task_p1 ${showRegular && 'task_p1_colored'}`}  onClick={regularHandler}>Regular</p>
                           <p className={`task_p2 ${showMonitor && 'task_p2_colored'}`} onClick={monitorHandler}>Monitor</p>
                       </div>
                    </div>
                    {showRegular && <Regular/>}
                    {showMonitor && <Monitor/>}
                </div>
              <TaskGroup/>
            </div>
        </div>
    )
}

export default Tasks