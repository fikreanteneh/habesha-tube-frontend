import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from './../redux/sagas/sagaActions';
import { HeadingLarge } from './../styles/textStyles';
import { Button, TextField, TextArea } from './../styles/formStyles';
import { CenterFlexDiv, CeneterHalfDiv } from './../styles/divStyles';


export const AddSong = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({title: "", description: "", fileLocation: "", author: "", createdBy: "" })
  const audioRef = useRef()
  const { currentUser } = useSelector(state => state.auth)

  
  const handleChange = (e) =>{
      const {id, value} = e.target
      setFormData((oldData) => ({...oldData, [id]: value }))
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      setFormData((oldData) => ({...oldData, 
        createdBy: currentUser.email, author: currentUser.fullName, fileLocation: audioRef.current.files[0]}))
      dispatch({type: sagaActions.ADDSONG, payload: formData})
      navigate('/profile')
      
  }
  return (
    <CenterFlexDiv>
    <CeneterHalfDiv>
      <HeadingLarge>Add Song</HeadingLarge>
      <form action="post">
        <TextField type='text' placeholder='Song title' id='title' value={formData.title} onChange={handleChange}></TextField>
        <TextArea type='text' placeholder='Song description or Lyrics' id='description' value={formData.description} onChange={handleChange}></TextArea>
        <input type="file" id="audio" name="audio" accept="audio/*" ref={audioRef} />
        <Button type='submit' onClick={handleSubmit}>Add This Song</Button>
      </form>
    </CeneterHalfDiv>
    </CenterFlexDiv>
  )
}
