import React from 'react';
import $ from 'jquery';
import './inputTask.css';

const InputTask = ( {handleInputChange, addToTotalTasks }) => {

    const addTask = () => {
        addToTotalTasks(); 
        $('.taskInput').val('');
    }

    return(
        <div className="inputTask-container">
            <div className="groupInput">
                <input 
                    className="taskInput" 
                    type="text" 
                    placeholder="new task" 
                    onChange={ handleInputChange } 
                    onKeyPress={(event) => {
                        if(event.key === 'Enter') {
                            addTask();
                        }
                    }}
                />
                <span 
                    className="addTaskBtn" 
                    onClick={ addTask }>⌐
                </span>
            </div>
        </div>
    )
}

export default InputTask;