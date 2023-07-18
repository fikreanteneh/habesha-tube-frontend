
import styled from "@emotion/styled"

export const NavTitle = styled.h1({
    fontSize: "1.25em",
    textAlign: "left",
    fontWeight: "bold",
})

export const NavTitleLink = styled.p(({ selected }) => ({
    fontSize: "1.2em",
    color: selected ? 'orange' : 'gray',
  }));

export const HeadingLarge = styled.h4({
    fontSize: "6em",
    fontWeight: "bold",
    textAlign: "center",
    margin: '2px auto',
})

export const HeadingMedium = styled.h4({
    fontSize: "2.5em",
    fontWeight: "bold",
    textAlign: "center",
    margin: '2px auto',
})



export const LeftTitle = styled.p({
    fontSize: "1.2em",
    fontWeight: "bold",
    margin: '0',
    padding: '0',
})

export const FooterDescription = styled.p({
    fontSize: "1em",
    color: "gray",
    margin: '0',
    padding: '0',
})



export const StyledTitle = styled.h4({
    fontSize: "2em",
    textAlign: "left"
})


export const Paragraph = styled.p({

})

export const ParagraphLink = styled.p({
    color: 'blue',
    ':hover': {
        color: 'blueviolet'
      }
    
})