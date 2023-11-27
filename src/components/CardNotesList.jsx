import React from "react";
import CardNotesBody from "./CardNotesBody";

function NotesList({ notes, onDelete, onArchive, onActive }) {

    if (notes.length === 0) {
        return (
            <p className="text_none">Tidak ada catatan</p>
        );
    }
    
    return (
        <div className="card_container">
            {
                notes.map((note) => (
                    <CardNotesBody key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
                ))
            }
        </div>
    );
}

export default NotesList;