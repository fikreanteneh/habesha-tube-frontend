import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeadingMedium } from '../styles/textStyles'
import { CenterContainer, PlayerContainer, AudioPlayer } from '../styles/divStyles'
import { SongCard } from '../components/SongCard'
import { sagaActions } from '../redux/sagas/sagaActions';




export const Home = () => {
      
    const dispatch = useDispatch()
    const [selectedSong, setSelectedSong] = useState(false)
    useEffect(() => {
        dispatch({type: sagaActions.LOADSONGS})
    }, [])

    const { currentSongs } = useSelector(state => state.songs)

    console.log(selectedSong)

  return (
    <section >
        <HeadingMedium> Listen to the Best Songs</HeadingMedium>
        <CenterContainer>
            {currentSongs.map((song) => (
              <SongCard key={song.id} song={song}  selecting={setSelectedSong}/>
            ))}
        </CenterContainer>
        <PlayerContainer>
          {selectedSong && <AudioPlayer controls autoPlay={true}><source src={selectedSong.fileLocation} /></AudioPlayer>}
        </PlayerContainer>

    </section>
  )
}
