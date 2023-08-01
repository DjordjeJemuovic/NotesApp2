import React from "react";
import "./App.css";

const SideBar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  return (
    <>
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>ADD</button>
        </div>
        <div className="app-sidebar-notes">
          {/* dodavanje novih Nodova pomocu map() metode */}
          {notes.map((note) => (
            <div
          className={`app-sidebar-note ${note.id===activeNote && 'active'}`}
              onClick={() => setActiveNote(note.id)}
            >
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
              </div>
              <p>{note.body && note.body.substr(0, 100) + "..."}</p>

              <small className="note-meta">
                Last modifided{" "}
                {new Date(note.lastModified).toLocaleDateString("en-GB", {})}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
