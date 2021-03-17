import React from 'react'
import classes from './TaskGroup.module.css'
import TaskCard from './TaskCard/TaskCard'

const TaskGroup = () => {
    return (
        <div className={classes.task}>
          <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.titleP}>Favourite Store</p>
                <div className={classes.createGroup}>
                    <span className={classes.create}>Create Group</span>
                    <img src='./icons/plus.png'/>
                </div>
            </div>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
          </div>
        </div>
    )
}

export default TaskGroup
