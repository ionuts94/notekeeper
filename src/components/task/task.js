import React, { useState } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import { FaMinusSquare } from 'react-icons/fa';
import './task.css';

const Task = ({ task, handleDoneTask, index, isDone, handleDeleteTask }) => {
    const [done, setDone] = useState(false);
    
    const setAsDone = () => {
        if(done === false) {
            setDone(true);
            handleDoneTask(index, true);
        } else {
            setDone(false);
            handleDoneTask(index, false);
        }
    }

    return(
        <div className="task-container">
            <div className="task-details">
                <h2 className={`${isDone ? 'markedAsDone' : null}`}>{ task }</h2>
            </div>
            <div className="task-controls">
                <span 
                    onClick={ setAsDone }
                    className={`${isDone ? 'checkedBtn' : null}`}>
                        <FaCheckSquare />
                </span>
                <span 
                    onClick={ () => handleDeleteTask(index) }
                    className="deleteBtn">
                        <FaMinusSquare />
                </span>
            </div>
        </div>
    )
}

export default Task;