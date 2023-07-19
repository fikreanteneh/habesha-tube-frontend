import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeadingMedium } from '../styles/textStyles'
import { CenterContainer, PlayerContainer, AudioPlayer } from '../styles/divStyles'
import { SongCard } from '../components/SongCard'
import { sagaActions } from '../redux/sagas/sagaActions';
import { Spinner } from './../components/Spinner';
import { toast } from 'react-toastify';




export const Home = () => {
      
    const dispatch = useDispatch()
    const { currentSongs, songStatus, songError } = useSelector(state => state.songs)
    const {  authStatus, currentUser } = useSelector(state => state.auth)


    const [selectedSong, setSelectedSong] = useState(0)
    useEffect(() => {
      if (songStatus != 'loaded') {
        dispatch({type: sagaActions.LOADSONGS})
        if (authStatus == 'authenticated') {
          dispatch({type: sagaActions.MYSONGS, payload: currentUser.email})
        }
      }
    }, [])

    useEffect(() => {
      if (selectedSong > 0) {
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = currentSongs[selectedSong - 1].fileLocation;
        audioPlayer.play();
      }
    }, [selectedSong, currentSongs]);

    if (songError){
      toast(songError)
      toast("Try Reloding the page")
    }

    const handleNext = () => {
      setSelectedSong((index) => index % currentSongs.length + 1)
    }

  return (
    <section >
        <HeadingMedium> Listen to the Best Songs</HeadingMedium>
        { songStatus == 'loading' ? 
          <Spinner/> :
          <CenterContainer>
            {currentSongs.map((song,index) => (
              <SongCard key={song.id} song={song}  selecting={setSelectedSong} type="viewer" index={index + 1}/>
            ))}
        </CenterContainer>}
        { selectedSong > 0 &&
          <PlayerContainer>
            <AudioPlayer 
              id='audio-player'
              onEnded={handleNext} 
              controls 
              autoPlay={true}>
              <source src={currentSongs[selectedSong - 1].fileLocation} />
            </AudioPlayer>
          </PlayerContainer>
        }

    </section>
  )
}
