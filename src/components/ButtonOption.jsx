import React from 'react'
import { MdArchive, MdDeleteForever, MdUnarchive } from 'react-icons/md'

export const ButtonArchive = ({ id, onArchive }) => {
    return (
        <button className='btn_archive' onClick={() => onArchive(id)}>
            <MdArchive />
        </button>
    )
}

export const ButtonDelete = ({ id, onDelete }) => {
    return (
        <button className='btn_delete' onClick={() => onDelete(id)}>
            <MdDeleteForever />
        </button>
    )
}

export const ButtonUnArchive = ({ id, onActive }) => {
    return (
        <button className='btn_archive' onClick={() => onActive(id)}>
            <MdUnarchive />
        </button>
    )
}