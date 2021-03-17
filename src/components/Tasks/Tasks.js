import React from 'react'
import './Tasks.css'
import Nav from '../Nav/Nav'
import TaskGroup from './TaskGroup/TaskGroup'
import TaskList from './TaskList/TaskList'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Nav title='Tasks'/>
            <div className='Task_content'>
              <TaskList/>
              <TaskGroup/>
            </div>
        </div>
    )
}

export default Dashboard