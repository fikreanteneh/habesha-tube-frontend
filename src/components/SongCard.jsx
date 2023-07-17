import { StyledDiv, CeneterHalfDiv, BetweenFlexDiv } from "../styles/divStyles"
import { LeftTitle } from "../styles/textStyles"
import { CircleImage } from "../styles/imgeStyles"
import { CardDiv } from "../styles/divStyles"
import MusicLogo from "../assets/images/MusicLogo.png"
import moment from "moment";
export const SongCard = ({song}) => {
console.log(Date.now())
  const now = moment();
  const diffInSec = now.diff(Date(song.createdAt), 'seconds');
  const relativeTime = moment.duration(new Date() , "seconds").humanize(true);

  return (
    <StyledDiv>
      <CeneterHalfDiv>
        <CardDiv>
          <CircleImage src={MusicLogo} ></CircleImage>
          <div>
            <LeftTitle>{song.title}</LeftTitle>
          <BetweenFlexDiv>
            <p>{song.author}</p>
            <p>{relativeTime}</p>
            <p>{Date(song.createdAt)}</p>


          </BetweenFlexDiv>
          </div>
        </CardDiv>
        </CeneterHalfDiv>
    </StyledDiv>
  )
}
