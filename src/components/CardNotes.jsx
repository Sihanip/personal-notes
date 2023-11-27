import React from 'react'
import NotesSearch from './NotesSearch';
import CardNotesList from './CardNotesList'

const CardNotes = ({ searchNote, onDelete, onArchive, onActive, notes, querySearch }) => {

    const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
    const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

    return (
        <>
            <div className="header_card">
                <h2>Catatan Aktif</h2>
                <NotesSearch searchNote={searchNote} />
            </div>
            <CardNotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />


            <div className="header_card">
                <h2>Archive</h2>
            </div>
            <CardNotesList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />

        </>
    )
}

export default CardNotes