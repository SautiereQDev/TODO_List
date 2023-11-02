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
        <button onClick={handleClick} className='deleteButton'>
            <p style={{margin: '0.5rem'}}>X</p>
        </button>
    )
}

export default DeleteButton
