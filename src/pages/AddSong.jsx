import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from './../redux/sagas/sagaActions';
import { HeadingLarge } from './../styles/textStyles';
import { Button, TextField, TextArea } from './../styles/formStyles';
import { CenterFlexDiv, CeneterHalfDiv } from './../styles/divStyles';
import { toast } from 'react-toastify';
import { resetSongsFaild } from '../redux/ducks/songs';
import { Spinner } from './../components/Spinner';


export const AddSong = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const audioRef = useRef()
  const [submitted, setSubmitted] = useState(false)
  const { currentUser } = useSelector(state => state.auth)
  const { songError, songStatus } = useSelector(state => state.songs)
  const [formData, setFormData] = useState({title: "", description: "", fileLocation: "", createdBy: currentUser.email, author: currentUser.fullName, })
  
  useEffect(() => {
    if (songError) {
      toast(songError)
      return () => {
        dispatch(resetSongsFaild);
      }
    }
  }, [songError, dispatch])

  const handleChange = (e) =>{
    const {id, value} = e.target
    setFormData((oldData) => ({...oldData, [id]: value }))
}

  if (songStatus == "loaded" && submitted){
    navigate('/profile')
  }

  
  const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch({type: sagaActions.ADDSONG, payload: {...formData, fileLocation: audioRef.current.files[0]}})
      setSubmitted(true)
      
  }

  if (songStatus == "submitting"){
    return <Spinner />
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
