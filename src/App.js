import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
// import dummyNotes from './dummy-notes';

import { useState } from "react";

function App() {
  const [notes,setNotes] = useState([]);
  return (
    <div className="App">
      <main id="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route path="/create-note" element={<CreateNote  setNotes={setNotes} />} 
            setNotes={setNotes} />
            <Route path="/edit-note" element={<EditNote />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
