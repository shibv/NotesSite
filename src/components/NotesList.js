import React from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'

const NotesList = ({notes, handleAddNotes,deleteNotes}) => {
  return (
    <div className="notes-list">

        {
            notes.map((note) => <Notes
             id= {note.id}
             text = {note.text}
             date={note.date}
             deleteNotes={deleteNotes}
            /> )
        }
       <AddNotes  handleAddNotes={handleAddNotes}  />

    </div>
  )
}

export default NotesList