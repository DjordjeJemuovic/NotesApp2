import React from 'react';
import {CiSearch} from 'react-icons/ci';

import { Link } from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs';
import NoteItem from '../components/NoteItem';

const Notes = ({notes}) =>{
return(
    <section>
    <header className="notes__header">
        <h2>My notes</h2>
        {/* <input type="text" placeholder='Keywords...'  autoFocus/> */}
        <button className='btn'><CiSearch/></button>
    </header>
    <div className="notes__container">
        {
            notes.map(note=><NoteItem key={note.id} note={note}/>)
        }
    </div>
    <Link className='btn add__btn' to='/create-note'><BsPlusLg/></Link>
    </section>
);
}

export default Notes;