import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from './../redux/sagas/sagaActions';
import { HeadingLarge } from './../styles/textStyles';
import { Button, TextField, TextArea } from './../styles/formStyles';
import { CenterFlexDiv, CeneterHalfDiv } from './../styles/divStyles';
import { EditSong } from './editSong';


export const EditSong = ({song}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({title: song.title, description: song.description})
  const audioRef = useRef()

  
  const handleChange = (e) =>{
      const {id, value} = e.target
      setFormData((oldData) => ({...oldData, [id]: value }))
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch({type: sagaActions.EDITSONG, payload: formData})
      navigate('/profile')
      
  }
  return (
    <CenterFlexDiv>
    <CeneterHalfDiv>
      <HeadingLarge>Add Song</HeadingLarge>
      <form action="post">
        <TextField type='text' placeholder='Song title' id='title' value={formData.title} onChange={handleChange}></TextField>
        <TextArea type='text' placeholder='Song description or Lyrics' id='description' value={formData.description} onChange={handleChange}></TextArea>
        <Button type='submit' onClick={handleSubmit}>Edit This Song</Button>
      </form>
    </CeneterHalfDiv>
    </CenterFlexDiv>
  )
}
