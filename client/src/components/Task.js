import React from 'react';
import DeleteButton from "./DeleteButton";

const Task = ({name, tag, id}) => {

    if ((name === null || undefined) || (tag === null || undefined) || (id === null || undefined)) {
        throw new Error('Task component requires name, tag, and id props')
    }

    return (
        <div className='task'>
            <p style={{width: '30vw', margin: 'auto', paddingLeft: '2rem', fontWeight: 'bold'}}>{name}</p>
            <p style={{width: '15vw', margin: 'auto'}}>{tag}</p>
            <DeleteButton id={id}/>
        </div>
    );
};

export default Task;