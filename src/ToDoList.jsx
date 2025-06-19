import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
        setTasks(t => [...tasks, newTask]); // functional updater form
        setNewTask(''); // Clear the input field after adding the task
        }

    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }


    function moveTaskDown(index) {
            if (index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

        return (<div classname="to-do-list">
            
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder='Enter A new task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className='add-task-button'
                    onClick={addTask}>
                    Add Task
                </button>

            </div>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className="text">{task}</span>
                            {task}
                            <button 
                             className='delete-task-button'
                             onClick={() => deleteTask(index)}>Delete</button>
                            <button 
                             className='move-task-up-button'
                             onClick={() => moveTaskUp(index)} disabled={index === 0}>Up</button>
                            <button 
                                className='move-task-down-button'
                                onClick={() => moveTaskDown(index)} disabled={index === tasks.length - 1}>Down</button>
                        </li>
                    ))}
                </ol>


            </div>);
}
export default ToDoList;