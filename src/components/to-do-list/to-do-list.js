import React from 'react';

import './to-do-list.css';

const ToDoList = () => {
    return (
        <div className='todolist-class'>
            <ol className='rectangle'>
                <li><span>Тренировка</span></li>
            </ol>
        </div>
    );
};

export default ToDoList;