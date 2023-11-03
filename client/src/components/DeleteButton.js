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
            <button onClick={handleClick} className='button'>
                <p style={{margin: '0.5rem'}}>X</p>
            </button>
        </div>

    )
}

export default DeleteButton
