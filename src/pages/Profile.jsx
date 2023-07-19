import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/ducks/auth'
import { useNavigate } from 'react-router-dom'
import { HeadingLarge, HeadingMedium } from '../styles/textStyles'
import { CenterFlexDiv, CeneterHalfDiv, CenterContainer, PlayerContainer, AudioPlayer } from '../styles/divStyles'
import { LeftTitle } from './../styles/textStyles';
import { Button, OrangeButton } from '../styles/formStyles'
import { useEffect, useState } from 'react'
import { sagaActions } from './../redux/sagas/sagaActions';
import { SongCard } from '../components/SongCard'
import { Spinner } from '../components/Spinner'
import { toast } from 'react-toastify';
import { clearSongs } from '../redux/ducks/songs'

export const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth)
    const { mySongs, songStatus, songError } = useSelector(state => state.songs)

    const [selectedSong, setSelectedSong] = useState(0)

    useEffect(() => {
        if (songStatus != 'loaded') {
            dispatch({type: sagaActions.LOADSONGS})
            dispatch({type: sagaActions.MYSONGS, payload: currentUser.email})
        }
    }, [])

    useEffect(() => {
        if (selectedSong > 0) {
          const audioPlayer = document.getElementById('audio-player');
          audioPlayer.src = mySongs[selectedSong - 1].fileLocation;
          audioPlayer.play();
        }
      }, [selectedSong, mySongs]);

    const handleSignout = (e) =>{
        e.preventDefault()
        dispatch(signout())
        dispatch(clearSongs())
    }

    if (songError){
        toast(songError)
        toast("Try Reloding the page")
    }

    if (songStatus == 'submitting'){
        return <Spinner/>
    }

    const handleNext = () => {
        setSelectedSong((index) => index % mySongs.length + 1)
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
        {songStatus == 'loading' ? 
            <Spinner/>:
            <CenterContainer>
              {mySongs.map((song, index) => ( <SongCard key={song.id} song={song} selecting={setSelectedSong} type="editor" index={index + 1}/>))}
        </CenterContainer>}
        {selectedSong && 
        <PlayerContainer>
           <AudioPlayer 
           controls 
           onEnded={handleNext}
           autoPlay={true}>
           <source src={mySongs[selectedSong - 1].fileLocation} />
           </AudioPlayer>
        </PlayerContainer>}

    </section>
  )
}
