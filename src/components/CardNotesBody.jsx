import React from 'react'
import { ButtonDelete, ButtonArchive, ButtonUnArchive } from './ButtonOption'
import { showFormattedDate } from "../utils/index";

function CardNotesBody({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
    return (
        <>
            <div className="card">
                <div className="card_body">
                    <div className="card_title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card_text">
                        <p>{showFormattedDate(createdAt)}</p>
                        <span>{body}</span>
                    </div>
                    <div className="card_footer">
                        <ButtonDelete id={id} onDelete={onDelete} />
                        {
                            archived ?
                                <ButtonUnArchive id={id} onActive={onActive} />
                                :
                                <ButtonArchive id={id} onArchive={onArchive} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNotesBody