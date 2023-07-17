import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/ducks/auth'
import { useNavigate } from 'react-router-dom'
import { HeadingLarge, HeadingMedium } from '../styles/textStyles'
import { CenterFlexDiv, CeneterHalfDiv } from '../styles/divStyles'
import { LeftTitle } from './../styles/textStyles';
import { Button, OrangeButton ,HalfButton, HalfOrangeButton } from '../styles/formStyles'
import { useEffect } from 'react'
import { sagaActions } from './../redux/sagas/sagaActions';
import { SongCard } from '../components/SongCard'
import { BetweenFlexDiv } from './../styles/divStyles';

export const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch({type: sagaActions.MYSONGS, payload: currentUser.email})
    }, [])

    const { mySongs } = useSelector(state => state.songs)


    const handleSignout = (e) =>{
        e.preventDefault()
        dispatch(signout())
    }


  return (
    <section>
        <HeadingLarge>My Profile</HeadingLarge>
        <CenterFlexDiv>
            <CeneterHalfDiv>
                <LeftTitle>{currentUser.fullName}</LeftTitle>
                <LeftTitle>{currentUser.email}</LeftTitle>
            </CeneterHalfDiv>
            <CeneterHalfDiv>
                <OrangeButton type='submit' onClick={handleSignout}>Sign Out</OrangeButton>
                <Button type='submit' onClick={() =>navigate('/addsong')}>Add Song</Button>
            </CeneterHalfDiv>
        </CenterFlexDiv>
        <HeadingMedium> MySongs</HeadingMedium>
        <CenterFlexDiv>
            <CeneterHalfDiv>
              {mySongs.map((song) => (
                <>{console.log(song)}
                    <SongCard key={song.id} song={song}/>
                    <BetweenFlexDiv>
                        {/* <HalfButton type='submit' onClick={() =>navigate(`/editsong/${song.id}`)}>Edit Song</HalfButton> */}
                        <HalfOrangeButton type='submit' onClick={() => dispatch({type:sagaActions.DELETESONG, payload:song})}>Delete Song</HalfOrangeButton>
                    </BetweenFlexDiv>
                </>
                ))}
            </CeneterHalfDiv>
            <CeneterHalfDiv>
              
            </CeneterHalfDiv>
        </CenterFlexDiv>

    </section>
  )
}
