import React from 'react';

const DeleteButton = ({id}) => {

    const handleClick = () => {
        fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(() => console.log('Tache supprimée avec succès !'))
            .catch(e => console.log('Un problème est survenu', e))
    }

    return (
        <div className='deleteButton'>
            <button onClick={handleClick}>
                <img src="/deleteIcon.png" alt="DeleteIcon UI Icon"/>
            </button>
        </div>

    )
}

export default DeleteButton
