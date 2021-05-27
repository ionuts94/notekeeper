import React, { useState, useEffect } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import Task from '../task/task';
import InputTask from '../inputTask/inputTask';
import firebase from '../../fiebase';
import './note.css';

const Note = ({ userId, noteId, tasks, noteDate, deleteNote }) => {
    
    const [newTask, setNewTask] = useState({});
    const [totalTasks, setTotalTasks] = useState( tasks ? tasks : [] );

    const handleInputChange = (event) => {
        setNewTask({task: event.target.value, isDone: false});
    }

    const addToTotalTasks = () => {
        if(newTask.task) {
            setTotalTasks([...totalTasks, newTask]);
            setNewTask({});
        }
    }
    const handleDeleteTask = (possition) => {
        let newArr = [];
        totalTasks.forEach((task, index) => {
            if(index === possition) {
                //skip this element
            } else {
                newArr.push(task);
            }
        })
        if(newArr.length === 0) {
            deleteNote(noteId);
        } else {
            setTotalTasks(newArr);
        }
    }

    const handleDoneTask = (index, status) => {
        let newArr = [...totalTasks];
        newArr[index] = {
            task: newArr[index].task,
            isDone: status
        }
        setTotalTasks(newArr);
    }

    const saveNote = async () => {
        const db = firebase.firestore();
        await db.collection('notes')
                .doc(`${noteId}`)
                .set({
                    userId: userId,
                    noteId: noteId,
                    noteDate: noteDate,
                    tasks: totalTasks
                });
    }

    useEffect(() => {
        saveNote();
    }, [totalTasks]);

    return(
        <div className="note-container">
            <p className="delNoteBtn-container">
                <span className="deleteNoteBtn"
                    onClick={ () => deleteNote(noteId) }>
                        <FaTimesCircle />
                </span>
            </p>
            <h1>{noteDate}</h1>
            {
                totalTasks.map((task,index) => 
                    <Task 
                        key={ index } 
                        task={ task.task }   
                        index={ index }
                        isDone={ task.isDone }
                        handleDoneTask={ handleDoneTask }
                        handleDeleteTask = { handleDeleteTask }
                    />)
            }
            <InputTask 
                handleInputChange={ handleInputChange }
                addToTotalTasks={ addToTotalTasks }
            />
        </div>
    )
}

export default Note;