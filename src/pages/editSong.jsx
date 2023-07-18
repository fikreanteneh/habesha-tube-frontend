import { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sagaActions } from '../redux/sagas/sagaActions';
import { HeadingLarge } from '../styles/textStyles';
import { Button, TextField, TextArea } from '../styles/formStyles';
import { CenterFlexDiv, CeneterHalfDiv } from '../styles/divStyles';
import { toast } from 'react-toastify';
import { resetAuthFaild } from '../redux/ducks/auth';
import { Spinner } from '../components/Spinner';


export const EditSong = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const song = location.state
  const [formData, setFormData] = useState({id: song.id ,title: song.title, description: song.description})
  const {songStatus, songError} = useSelector(state => state.songs)
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e) =>{
      const {id, value} = e.target
      setFormData((oldData) => ({...oldData, [id]: value }))
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch({type: sagaActions.EDITSONG, payload: formData})
      setSubmitted(true)
  }

  useEffect(() => {
    if (songError) {
      toast(songError)
      return () => {
        dispatch(resetAuthFaild);
      }
    }
  }, [songError, dispatch])

  if (songStatus == "loaded" && submitted){
    navigate('/profile')
  }

  if (songStatus == "submitting"){
    return <Spinner/>
  }
 
  return (
    <CenterFlexDiv>
    <CeneterHalfDiv>
      <HeadingLarge>Edit Song</HeadingLarge>
      <form action="post">
        <TextField type='text' placeholder='Song title' id='title' value={formData.title} onChange={handleChange}></TextField>
        <TextArea type='text' placeholder='Song description or Lyrics' id='description' value={formData.description} onChange={handleChange}></TextArea>
        <Button type='submit' onClick={handleSubmit}>Edit This Song</Button>
      </form>
    </CeneterHalfDiv>
    </CenterFlexDiv>
  )
}
