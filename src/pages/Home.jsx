import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/ducks/auth'
import { useNavigate } from 'react-router-dom'
import { HeadingMedium } from '../styles/textStyles'
import { CenterFlexDiv, CeneterHalfDiv, InlineDiv } from '../styles/divStyles'
import { LeftTitle } from '../styles/textStyles';
import { Button, OrangeButton } from '../styles/formStyles'
import { SongCard } from '../components/SongCard'
import { sagaActions } from '../redux/sagas/sagaActions';


export const Home = () => {
      
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: sagaActions.LOADSONGS})
    }, [])

    const { currentSongs } = useSelector(state => state.songs)


  return (
    <section>
        <HeadingMedium> Listen to the Best Songs</HeadingMedium>
        <CenterFlexDiv>
            <CeneterHalfDiv>
              {currentSongs.map((song) => (<SongCard key={song.id} song={song}/>))}
            </CeneterHalfDiv>
            <CeneterHalfDiv>
              
            </CeneterHalfDiv>
        </CenterFlexDiv>

    </section>
  )
}
