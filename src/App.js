import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import SideBar from "./SideBar";
import Main from "./Main";

function App() {
  //useState()
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  //Funkcija koja dodaje nove Nodove
  const onAddNote = () => {
    //kreiranje Node objekta
    const newNote = {
      //uuid() je motoda za dimanicni ID,potrebno je instalirati njenu biblioteku pre implementacije
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified:  Date.now(),
    };
    //setovanje pocetne vrednosti noda
    setNotes([newNote, ...notes]);
  };
  //funkcija za brisanje noda
  const onDeleteNote = (idDeleteNote) => {
    //setovanje Noda,tj brisanje nosa koriscenjem fitler() metode,targetuje se Noud preko id-ja
    setNotes(notes.filter((note) => note.id !== idDeleteNote));
  };
  //funkcija za selektovanje 1 noda aktivnog
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  //funkcija za update noda
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  return (
    <div className="App">
      <SideBar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
