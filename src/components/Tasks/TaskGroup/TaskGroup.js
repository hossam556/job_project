import React from 'react'
import classes from './TaskGroup.module.css'
import TaskCard from './TaskCard/TaskCard'

const TaskGroup = () => {
    return (
        <div className={classes.task}>
          <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.titleP}>Tasks Group</p>
                <div className={classes.createGroup}>
                    <span className={classes.create}>Create Group</span>
                    <img src='./icons/plus.png'/>
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
            <TaskCard   title='#5'/>
            <TaskCard   title='#5'/>
            <TaskCard   title='#5'/>
          </div>
        </div>
    )
}

export default TaskGroup
