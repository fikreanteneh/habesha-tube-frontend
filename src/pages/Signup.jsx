import { useEffect, useState } from 'react'
import AuthBackground from '../assets/images/AuthBackground.png'
import { Link,  } from 'react-router-dom'
import { useDispatch,  } from 'react-redux'
import { CeneterHalfDiv, CenterFlexDiv, FlexDiv } from '../styles/divStyles'
import { HeadingLarge, Paragraph, ParagraphLink } from './../styles/textStyles';
import { Button, TextField } from '../styles/formStyles'
import { RoundedImage } from '../styles/imgeStyles'
import { sagaActions } from '../redux/sagas/sagaActions'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { resetAuthFaild } from '../redux/ducks/auth'


export const Signup = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({fullName: "", email: "", password: ""})
    const {authError} = useSelector(state => state.auth)


    useEffect(() => {
        if (authError) {
            toast.error(authError)   
            return () => {
                dispatch(resetAuthFaild());
              };
        }
    }, [authError, dispatch])

    let showPassword = false;

    const handleChange = (e) =>{
        const {id, value} = e.target
        setFormData((oldData) => ({...oldData, [id]: value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: sagaActions.SIGNUP, payload: formData})

    }

  return (
    <section>
        <HeadingLarge>Sign Up</HeadingLarge>
        <CenterFlexDiv>
            <CeneterHalfDiv>
                <RoundedImage src={AuthBackground} className='w-full rounded-2xl'></RoundedImage>
            </CeneterHalfDiv>
            <CeneterHalfDiv>
                <form>
                    <TextField type='text' placeholder='Full Name' id='fullName' value={formData.fullName} onChange={handleChange}></TextField>
                    <TextField type='email' placeholder='username' id='email' value={formData.email} onChange={handleChange}></TextField>
                    <TextField type={showPassword ? 'text': 'password'} placeholder='Password' id='password' value={formData.password} onChange={handleChange}></TextField>
                    <FlexDiv>
                        <Paragraph>Already have an account?</Paragraph>
                        <ParagraphLink><Link to='/signin'>Sign in</Link></ParagraphLink>
                    </FlexDiv>
                    <Button type='submit' onClick={handleSubmit}>Sign Up</Button>
            
                </form>

            </CeneterHalfDiv>
        </CenterFlexDiv>
    </section>
  )
}
