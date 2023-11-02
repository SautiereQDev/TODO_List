import React from 'react';

const ValidateButton = ({id, status}) => {

    const isChecked = status === true

    const handleChange = () => {
        fetch(`http://localhost:4000/tasks/${ id }`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: !status })
        })
            .then(() => console.log('Status de la tâche modifié'))
            .catch(e => console.log('Un problème est survenu', e))
    }
        return (
            <input type="checkbox" onChange={ handleChange } defaultChecked={isChecked}/>
        );
}
export default ValidateButton
