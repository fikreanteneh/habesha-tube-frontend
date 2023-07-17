import styled from '@emotion/styled';

const divGeneral = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '1em',
    margin: '5px auto',
    padding: '10px',
    transition: 'all 0.2s ease-in-out',
}

export const StyledDiv = styled.div({
    margin: '15px auto',
    padding: '5px',
    width: '100%',
    transition: 'all 0.5s ease-in-out',

    boxShadow: '0 0 5px 0 rgba(0,0,0,0.5)',
    borderRadius: '10px',
    ':hover': {
        scale: '1.2',
    }
})

export const CardDiv = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '1em',
    height: '5rem',
})

export const InlineDiv = styled.div({
    display: 'inline-flex',
})

export const CenterFlexDiv = styled.div({
    ...divGeneral, justifyContent: "center",
})


export const BetweenFlexDiv = styled.div({
 ...divGeneral, justifyContent: 'space-between'
})


export const CeneterHalfDiv = styled.div({
    width: "clamp(500px, 50%, 600px)"
})

// export const CenterBorderedDiv = styled.div({
//     width: "clamp(500px, 50%, 600px)",
//     margin: "0 auto"
// })