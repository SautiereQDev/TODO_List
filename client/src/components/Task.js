import React from 'react';
import DeleteButton from "./DeleteButton";
import ValidateButton from "./ValidateButton";
import Tag from "./Tag";

const Task = ({name, tag, id, status}) => {

    if ((name === null || undefined) || (tag === null || undefined) || (id === null || undefined)) {
        throw new Error('Task component requires name, tag, and id props')
    }

    if( typeof status !== 'boolean') {
        throw new Error('Task component requires status prop to be a boolean')
    }

    if( status === false) {
        return (
            <div className='task' style={{backgroundColor: '#DFDFDF'}}>
                <ValidateButton id={id} status={status} />
                <p className='taskName'>{name}</p>
                <Tag tag={tag}/>
                <DeleteButton id={id}/>
            </div>
        );
    } else {
        return (
            <div className='task' style={{backgroundColor: '#7bff81'}}>
                <ValidateButton id={id} status={status}/>
                <p className='taskName' style={{textDecoration: 'line-through'}}>{name}</p>
                <Tag tag={tag}/>
                <DeleteButton id={id}/>
            </div>
        );
    }
};

export default Task;
