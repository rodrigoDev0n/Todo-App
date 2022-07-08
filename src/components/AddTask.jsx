import {React, useState} from 'react';

export const AddTask = ({onNewTask}) => {

  const [inputValue, setinputValue] = useState('');

  const onSubmitInput = (e) => {
    setinputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const animateInput = document.querySelector('input');
    const clearButton = document.querySelector('.clear_button');

    if(inputValue === '') {
      setInterval(() => {
        animateInput.style.cssText = 'animation: aniContainer alternate .3s ease-in;';
      }, 100);
      animateInput.style.cssText = 'animation: ;';
    } else {
      clearButton.style.cssText = 'opacity: 1; transition: all 0.5s ease';
    }


    onNewTask(inputValue);
    setinputValue('');
  }

  return (
    <>
        <div className='form-container'>
          <div className='input_container'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Añade una tarea"
                    onChange={onSubmitInput}
                    value={inputValue}
                />
            </form>
            <button className='add_button' onClick={onSubmit}>Añadir</button>
          </div> 
        </div>
    </>
  )
}
