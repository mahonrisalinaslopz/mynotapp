import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';
import '../notas/styles.css';

const Notas = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "¡Mi primer Nota!",
            date: "21/12/2022"
        }
    ]);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data', 
            JSON.stringify(notes)
        );
    }, [notes]);

    const addNote = (text) => {
        const date = new Date ();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className={`${darkMode && 'dark-Mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode} />
                <Search handleSearchNote={setSearchText} />
                <NotesList 
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )} 
                    handleAddNote={addNote} 
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
}

export default Notas;