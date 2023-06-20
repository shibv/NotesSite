import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Notes = ({id, text, date, deleteNotes}) => {
  return (
    <div className="notes">
        <span>{text}</span>

        <div className="notes-fotter">
            <small>{date}</small>
            <MdDeleteForever className="delete-icon" size='1.3em' onClick={() => deleteNotes(id)} />
        </div>
    </div>
  )
}

export default Notes