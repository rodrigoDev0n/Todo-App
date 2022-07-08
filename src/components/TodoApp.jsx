import {React, useState} from 'react'
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';

export const TodoApp = () => {

  const [task, setTask] = useState([]);

  const onCompleteTask = (taskName) => {

    let contador = 0;

    while(task[contador] != taskName){
      contador++;
    }

    let container = document.getElementsByClassName('task_container--list')[contador];
    let completed = document.getElementsByClassName('completed')[contador];
    container.style.cssText = 'background: #88E76F; color: #fff; text-decoration-line: line-through; transition: all 0.3s ease';
  }

  const addTask = (newTask) => {

    if(newTask.length === 0) return;
    
    task.find(t => t.toLowerCase() === newTask.toLowerCase())
    ? setTask([...task])
    : setTask([newTask, ...task]);

    localStorage.setItem('data', JSON.stringify([newTask]));

  }

  const onRemoveTask = (taskName) => {
    const clearButton = document.querySelector('.clear_button');
    
    let contador = 0;

    while(task[contador] != taskName){
      contador++;
    }

    let container = document.getElementsByClassName('task_container--list')[contador];
    container.style.cssText = 'animation: deleteAnimation alternate .3s  ease-in';
    
    if(task.length == 1)
      clearButton.style.cssText = 'opacity: 0; transition: all 0.2s ease';  

    setTimeout(() => {
      const newTaskList = task.filter(t => t !== taskName);
      setTask(newTaskList);
    }, 200);
  }

  const clearTask = () => {
    const clearButton = document.querySelector('.clear_button');
    clearButton.style.cssText = 'opacity: 0; transition: all 0.2s ease';

    setTask([]);
  }

  return (
    <>  
        <AddTask onNewTask={addTask}/>
        {
            task.map( t => <TaskList key={t} taskList={t} onRemove={onRemoveTask} onComplete={onCompleteTask} />)
        }
        <div className='clear-container'>
          <div className='clear_task--container'>
            <button className='clear_button' onClick={clearTask}>Limpiar Tareas</button>
          </div>
        </div>
    </>
  )
}
