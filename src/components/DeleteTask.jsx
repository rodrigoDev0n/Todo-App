import React from 'react';

export const DeleteTask = ({taskName, removeTask}) => {
  
  const deleteTask = () => {
    removeTask(taskName);
  }

  return (
    <div onClick={deleteTask} className='button_delete'></div>
  )
}
