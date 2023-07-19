import { StyledDiv, InternalCard } from "../styles/divStyles"
import { FooterDescription, LeftTitle } from "../styles/textStyles"
import { CircleImage } from "../styles/imgeStyles"
import { CardDiv } from "../styles/divStyles"
import MusicLogo from "../assets/images/MusicLogo.png"
import Play from "../assets/images/Play.png"
import Edit from "../assets/images/Edit.png"
import Delete from "../assets/images/Delete.png"
import moment from "moment"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { sagaActions } from "../redux/sagas/sagaActions"
import {useState} from "react"

// eslint-disable-next-line react/prop-types
export const SongCard = ({song, selecting, type, index}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // eslint-disable-next-line react/prop-types
  const {createdAt, author, title, description} = song
  const [showDescription, setShowDescription] = useState(false); 
  
  // eslint-disable-next-line react/prop-types
  const timestamp = createdAt.seconds * 1000 // convert to firebase secnd to milliseconds
  const dateObject = new Date(timestamp)
  const now = moment();
  const diffInSec = now.diff(dateObject, 'seconds');
  const relativeTime = moment.duration(diffInSec, "seconds").humanize(false);

  const handleSelection = (index) => {
    selecting(() => index)
  }
  const handleDesc = () => {
    setShowDescription((prev) => !prev)
  }

  return (
    <>
      <StyledDiv>
          <CardDiv>
            <CircleImage src={MusicLogo} onClick={handleDesc}></CircleImage>
            <InternalCard >
              <LeftTitle>{title}</LeftTitle>
                <FooterDescription>{author}</FooterDescription>
                <FooterDescription>{relativeTime}</FooterDescription>
            </InternalCard>
            {type == "editor" && 
            <>
              <CircleImage src={Delete} onClick={() => dispatch({type:sagaActions.DELETESONG, payload:song})}  ></CircleImage>
              <CircleImage src={Edit} onClick={() => navigate(`/editsong`, {state: song}) }></CircleImage>
            </>
            }
            <CircleImage src={Play} onClick={() => handleSelection(index)} ></CircleImage>
          </CardDiv>
        {showDescription && <CardDiv><p>{description}</p></CardDiv>}
      </StyledDiv>     
    </>
  )
}
