import React, {useRef} from 'react';
import ValidateTaskButton from "./ValidateTaskButton";

const EditedTask = ({handleClick}) => {

    const taskName = useRef('');
    const tag = useRef('');

    return (
        <div className='editTask'>
            <form>
                <input type="text" placeholder='Task name' ref={taskName} autoFocus={true}/>
                <select ref={tag}>
                    <option value="" >--Please select Tag--</option>
                    <option value="General" >General</option>
                    <option value="Achat" >Achat</option>
                    <option value="Travail" >Travail</option>
                    <option value="Personnel" >Personnel</option>
                    <option value="Autre" >Autre</option>
                    <option value="Scolaire" >Scolaire</option>
                </select>
            </form>
            <ValidateTaskButton taskName={taskName.current.value} tag={tag.current.value}/>
            <div className='deleteButton'>
                <button onClick={handleClick}>
                    <img src="/deleteIcon.png" alt="DeleteIcon UI Icon"/>
                </button>
            </div>

        </div>
    );
};

export default EditedTask;
