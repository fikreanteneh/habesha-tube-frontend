import { StyledDiv, InternalCard } from "../styles/divStyles"
import { FooterDescription, LeftTitle } from "../styles/textStyles"
import { CircleImage } from "../styles/imgeStyles"
import { CardDiv } from "../styles/divStyles"
import MusicLogo from "../assets/images/MusicLogo.png"
import Play from "../assets/images/Play.png"


import moment from "moment"


// eslint-disable-next-line react/prop-types
export const SongCard = ({song, selecting}) => {

  // eslint-disable-next-line react/prop-types
  const {createdAt, author, title} = song
  
  // eslint-disable-next-line react/prop-types
  const timestamp = createdAt.seconds * 1000 // convert to firebase secnd to milliseconds
  const dateObject = new Date(timestamp)
  const now = moment();
  const diffInSec = now.diff(dateObject, 'seconds');
  const relativeTime = moment.duration(diffInSec, "seconds").humanize(false);
  return (
    <StyledDiv>
        <CardDiv>
          <CircleImage src={MusicLogo} ></CircleImage>
          <InternalCard>
            <LeftTitle>{title}</LeftTitle>
              <FooterDescription>{author}</FooterDescription>
              <FooterDescription>{relativeTime}</FooterDescription>
          </InternalCard>
          <CircleImage src={Play} onClick={() => selecting(song)} ></CircleImage>
        </CardDiv>
    </StyledDiv>
  )
}
