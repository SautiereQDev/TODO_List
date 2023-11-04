import React from 'react';

const ValidateTaskButton = ({taskName, tag}) => {

    const handleClick = () => {
        fetch('http://localhost:4000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: taskName, tag: tag})
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch(e => console.log(e))

    }

    return (
        <div className='validationButton'>
            <button onClick={handleClick}>
                <img src="/checkIcon.png" alt="CheckIcon UI Icon"/>
            </button>
        </div>
    );

};

export default ValidateTaskButton;
