import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

export default function App() {
  const [notes, setNotes] = React.useState([])

  const [currentNoteId, setCurrentNoteId] = React.useState("")

  const [tempNoteText, setTempNoteText] = React.useState("")

  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

  React.useEffect(() => {
    if (notes.length === 1) {
      setCurrentNoteId(notes[0].id)
    }
  }, [notes])

  React.useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote.body)
    }
  }, [currentNote])

  React.useEffect(() => {
    if (currentNote) {
      const timeoutRef = setTimeout(() => {
        updateNote(tempNoteText)
      }, 500)
      return () => clearTimeout(timeoutRef)
    }
  }, [tempNoteText])

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
      const notesArray = snapshot.docs.map(doc => {
        const noteData = { ...doc.data() }
        noteData.id = doc.id
        return noteData
      })
      notesArray.sort((note1, note2) => note2.updatedAt - note1.updatedAt)
      setNotes(notesArray)
    })
    return unsubscribe
  }, [])

  async function createNewNote() {
    const newNote = {
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    const newNoteRef = addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }



  function updateNote(text) {
    console.log(currentNoteId, currentNote)
    const docRef = doc(db, "notes", currentNoteId)
    setDoc(docRef, { body: text, updatedAt: Date.now() }, { merge: true })
  }

  async function deleteNote(e, noteId) {
    e.stopPropagation()
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={currentNote}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />

            <Editor
              tempNoteText={tempNoteText}
              updateTempNoteText={setTempNoteText}
            />

          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
