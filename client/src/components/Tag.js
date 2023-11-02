import React from 'react';

const Tag = ({tag}) => {

switch (tag) {
    case 'General':
        return <p className='taskTag' style={{backgroundColor: '#f0f0f0', color: '#000000'}}>{tag}</p>
    case 'Scolaire':
        return <p className='taskTag' style={{backgroundColor: '#00b7ff', color: '#000000'}}>{tag}</p>
    case 'Autre':
        return <p className='taskTag' style={{backgroundColor: '#ff00ff', color: '#000000'}}>{tag}</p>
    case 'Achat':
        return <p className='taskTag' style={{backgroundColor: 'rgba(255,255,0,0.76)', color: '#000000'}}>{tag}</p>
    default:
        throw new Error('Tag component requires tag prop to be one of the following: General, Scolaire, Autre, Achat')
}

};

export default Tag;
