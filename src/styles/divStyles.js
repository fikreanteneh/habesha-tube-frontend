import styled from '@emotion/styled'

const divGeneral = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '1em',
    margin: '5px auto',
    padding: '10px',
    transition: 'all 0.2s ease-in-out',
}

export const CenterContainer = styled.div({
    maxWidth: '700px',
    margin: '0 auto',
})

export const PlayerContainer = styled.div({
    maxWidth: '800px',
    margin: '0 auto',
    position: 'sticky',
    bottom: '0',
    zIndex: '100',
})

export const AudioPlayer = styled.audio({
  width: '100%' ,
  color: 'blue' ,
  backgroundColor: 'wheat' ,
  padding: '10px' ,
  borderRadius:'5px',
  outline: 'none' ,
  '&::-webkit-media-controls-panel': {
    backgroundColor: "wheat" ,
    bordeRadius: "5px" ,
    color: "#333" ,
  },
  '&::-webkit-media-controls-play-button': {
    backgroundColor: 'lightblue' ,
    color: '#fff' ,
    borderRadius: '50%',
  },
 '&::-webkit-media-controls-timeline' :{
    backgroundColor: 'lightblue' ,
    height: '5px' ,
    borderRadius: '5px' ,
  },
  '&::-webkit-media-controls-current-time-display': {
    color: '#333' ,
  },
  '&::-webkit-media-controls-time-remaining-display': {
    color: '#333' ,
  }
})

export const StyledDiv = styled.div({
    margin: '15px auto',
    padding: '5px',
    width: '100%',
    transition: 'all 0.5s ease-in-out',
    backgroundColor: 'white',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
    borderRadius: '10px',
    ':hover': {
        scale: '1.05',
    }
})

export const CardDiv = styled.div({
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    height: '3.5rem',
})

export const InlineDiv = styled.img({
    display: 'inline-flex'
})

export const FlexDiv = styled.div({
        ...divGeneral, justifyContent: 'left',

})

export const CenterFlexDiv = styled.div({
    ...divGeneral, justifyContent: 'center',
})


export const BetweenFlexDiv = styled.div({
 ...divGeneral, justifyContent: 'space-between'
})


export const CeneterHalfDiv = styled.div({
    width: 'clamp(500px, 50%, 600px)'
})


export const BigCeneterHalfDiv = styled.div({
    width: 'clamp(500px, 50%, 800px)'
})
export const VerticalScroll = styled.div({
    overflowY: 'scroll',

})

export const InternalCard = styled.div({
    width:'100%',
    margin: 'auto',
   })
   

export const NavBar = styled.div({
    backgroundColor: 'white',
    position: 'sticky',
    top: '0',
    zIndex: '10',
    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
})

export const HeaderDiv = styled.header({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 5px',
    height: '3rem'
})

export const VCenterFlex = styled.div({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
})