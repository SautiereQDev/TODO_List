import React from 'react';

const Tag = ({tag}) => {

switch (tag) {
    case 'General':
        return (
            <div className='taskTag'>
                <p style={{backgroundColor: '#f0f0f0', color: '#000000'}}>{tag}</p>
            </div>
        )
    case 'Scolaire':
        return (
            <div className='taskTag'>
                <p style={{backgroundColor: '#00b7ff'}}>{tag}</p>
            </div>
        )
    case 'Achat':
        return (
            <div className='taskTag'>
                <p style={{backgroundColor: '#ffff00', color: '#000000'}}>{tag}</p>
            </div>
        )
    case 'Travail':
        return (
            <div className='taskTag'>
                <p style={{backgroundColor: '#ff0000'}}>{tag}</p>
            </div>
        )
    case 'Personnel':
        return(
            <div className='taskTag'>
                <p style={{backgroundColor: '#00ff00'}}>{tag}</p>
            </div>
        )
    case 'Autre':
        return(
            <div className='taskTag'>
                <p style={{backgroundColor: '#ff00ff'}}>{tag}</p>
            </div>
        )
    default:
        throw new Error('Tag component requires tag prop to be one of the following: General, Scolaire, Autre, Achat')
}};

export default Tag;
