import React, { useEffect, useState } from 'react';

const AddTaskButton = ({handleClick}) => {

    return (
        <button className='addButton' onClick={handleClick}>
            <img src="/addIcon.png" alt="addTask UI Icon"/>
        </button>
    );
};

export default AddTaskButton;
