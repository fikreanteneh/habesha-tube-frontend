import { useEffect, useState } from 'react'
import AuthBackground from '../assets/images/AuthBackground.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HeadingLarge, ParagraphLink, Paragraph } from '../styles/textStyles'
import { CenterFlexDiv, CeneterHalfDiv, BetweenFlexDiv } from '../styles/divStyles'
import { RoundedImage } from '../styles/imgeStyles'
import { TextField, Button } from '../styles/formStyles'
import { sagaActions } from '../redux/sagas/sagaActions'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const Signin = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({email: "", password: ""})
    let showPassword = false;

    const { authError } = useSelector(state => state.auth)
    useEffect(() => {
        if (authError) {
            // console.log("============", authError)
            toast.error(authError)

        }
    }, [dispatch])
    
    const handleChange = (e) =>{
        const {id, value} = e.target
        setFormData((oldData) => ({...oldData, [id]: value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: sagaActions.SIGNIN, payload: formData})
    }


  return (
    <section>
        <HeadingLarge>Sign In</HeadingLarge>
        <CenterFlexDiv>
            <CeneterHalfDiv>
                <RoundedImage src={AuthBackground} ></RoundedImage>
            </CeneterHalfDiv>
            <CeneterHalfDiv>
                <form>
                    <TextField type='email' placeholder='username' id='email' value={formData.email} onChange={handleChange}></TextField>
                    <TextField type={showPassword ? 'text': 'password'} placeholder='Password' id='password' value={formData.password} onChange={handleChange}></TextField>
                    <BetweenFlexDiv>
                        <Paragraph>Dont have an account?<Link to='/signup'>Register</Link></Paragraph>
                        <ParagraphLink><Link to="/forgotpassword"> Forgot Password?</Link></ParagraphLink>
                    </BetweenFlexDiv>
                    <Button type='submit' onClick={handleSubmit}>Sign In</Button>
                </form>

            </CeneterHalfDiv>
        </CenterFlexDiv>
    </section>
  )
}
