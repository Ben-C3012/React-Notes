import { useState } from 'react'
import './NoteForm.css'
import Note from '../Note/Note'
import { CardGroup } from 'react-bootstrap'



function NoteForm() {
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')



  const handleNoteChange = (event) => {
      console.log(event.target.value);
      setNote(event.target.value)
  }

  const hanleTitleChange = event => {
       console.log(event.target.value);
       setTitle(event.target.value)
  }

  const handleForm = event => {
      event.preventDefault()
      const formData = {
        noteTitle: title, 
        noteInput: note
      }

      // saveFormData(formData)
      console.log(formData);
      setTitle('')
      setNote('')

  }




  return (
    <>
      <div className="Card">

        <form onSubmit={handleForm}  className='form' action="blank">
          <input value={title} onChange = {hanleTitleChange} placeholder='Title...' className='title-input' type="text" />
          <textarea value={note} onChange={handleNoteChange} className='text-area-input' name="textarea" id="textarea" cols="30" rows="12" placeholder='Note...'></textarea>
          <button className='add-btn'>Add</button>
        </form>

    

      </div>


    </>

  )
}

export default NoteForm