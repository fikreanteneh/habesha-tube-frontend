import { NavLink, useLocation } from 'react-router-dom';
import Headphone from '../assets/images/Headphone.svg';
import { useSelector } from 'react-redux';
import { NavBar, HeaderDiv, VCenterFlex } from '../styles/divStyles';
import { RoundedImage } from '../styles/imgeStyles';
import { NavTitle, NavTitleLink } from '../styles/textStyles';

export const Header = () => {
    
    const authStatus = useSelector(state => state.auth.authStatus)
    const location = useLocation();
  
    return (
    <NavBar>
        <HeaderDiv>
            <VCenterFlex>
                <RoundedImage src={Headphone} ></RoundedImage>
                <NavTitle>HabeshanTube</NavTitle>
            </VCenterFlex> 
            
            <VCenterFlex>
            <NavLink to="/"><NavTitleLink selected={location.pathname == "/"}>Home</NavTitleLink></NavLink>
                {authStatus == "authenticated" ? 
                    <NavLink to="/profile"><NavTitleLink selected={location.pathname == "/profile"}>Profile</NavTitleLink></NavLink> :
                    <NavLink to="/signin"><NavTitleLink selected={location.pathname == "/signin"} to="/signin">Sign In</NavTitleLink></NavLink>}
            </VCenterFlex>
        
        </HeaderDiv>
    </NavBar>
  )
}
