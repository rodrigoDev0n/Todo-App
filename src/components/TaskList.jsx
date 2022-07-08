import {React, useState, createRef} from 'react';
import { DeleteTask } from './DeleteTask';

export const TaskList = ({taskList, onRemove, onComplete}) => {
 
  const completeTask = () => {
    onComplete(taskList)
  } 

  return (
    <>
       <div className='container'>
            <div className='task_container--list'>
                <input
                  type="radio"
                  onChange={completeTask}
                />
                <p id='task' className='task'>{taskList}</p>
                <DeleteTask taskName={taskList} removeTask={onRemove} />
            </div>
       </div>
    </>
  )
}
