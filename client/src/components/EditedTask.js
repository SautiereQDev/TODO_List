import React from 'react';
import DeleteButton from "./DeleteButton";

const EditedTask = ({handleClick}) => {

    return (
        <div className='task'>
            <form>
                <input type="text" placeholder='Task name'/>
                <select>
                    <option value="" >--Please select Tag--</option>
                    <option value="General" >General</option>
                    <option value="Achat" >Achat</option>
                    <option value="Travail" >Travail</option>
                    <option value="Personnel" >Personnel</option>
                    <option value="Autre" >Autre</option>
                    <option value="Scolaire" >Scolaire</option>
                </select>
            </form>
            <div className='deleteButton'>
                <button onClick={handleClick}>
                    <img src="/deleteIcon.png" alt="DeleteIcon UI Icon"/>
                </button>
            </div>
        </div>
    );
};

export default EditedTask;
