import {StyledHeader} from "./styles/Header.styled";
import Navbar from "./Navbar";
import cartImg from './images/icon-cart.svg';
import bars from './images/icon-menu.svg';
import avatar from './images/image-avatar.png';
import logo from './images/logo.svg';



function Header() {
  return (
    <div>
      <StyledHeader cr= 'black' bg="blue">
        <div className="left">
          <img src={bars} alt="" className="icon bars"/>
          <img src={logo} alt="" className="logo"/>
          <Navbar />
        </div>
        <div className="right">
          <img src={cartImg} alt="" className="icon cart"/>
          <img src={avatar} alt="" className="user"/>
        </div>
      </StyledHeader>
    </div>
  )
}

export default Header 