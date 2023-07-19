import styled from "@emotion/styled"
import { NavLink } from 'react-router-dom';

const All = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

export const WrongRoute = () => {
  return (
    <All>
       <h1>This Link doesn&#39;t exist.</h1>
       <NavLink to="/">Click Here! to go home page</NavLink> 
    </All>
  )
}
