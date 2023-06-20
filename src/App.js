
import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';


function App() {

  const [notes, setNotes] =useState([{
    id:nanoid(),
    text: "This is shiv ",
    date: "13/05/23"
  },
  {
    id:nanoid(),
    text: "Hey bro what's up ",
    date: "13/05/23"
  },
  {
    id:nanoid(),
    text: "Nothing much , working on my react siklls ",
    date: "13/05/23"
  },
  {
    id:nanoid(),
    text: "Cool keep working  ",
    date: "13/05/23"
  },
  {
    id:nanoid(),
    text: "Cool keep working  ",
    date: "13/05/23"
  }
]);

const [searchtext,setSearchText] = useState('');

function addNotes(text)
{
  const date = new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleString()

  }

  const newNOTES = [...notes, newNote];
  setNotes(newNOTES);
  //console.log(text);
}

function deleteNotes(id)
{
  const newNotess = notes.filter((note) => note.id !== id);
  setNotes(newNotess);
}

  return (
    <div className="container">
      <Header />
      <Search handleSearch={setSearchText} />
       <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchtext))} deleteNotes={deleteNotes}  handleAddNotes={addNotes} />
       
    </div>
  );
}

export default App;
