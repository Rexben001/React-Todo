import React from 'react';
import './Todo.css';

const todoForm = () => (
    <div>
        <input type='text' placeholder='Enter your ToDo' />
        <button>Add Todo</button>
        <button>Clear Completed</button>
    </div>
);

export default todoForm;
