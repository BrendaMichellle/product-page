import {StyledNavbar} from './styles/Navbar.styled';

function Navbar() {
  return (
    <div > 
      <StyledNavbar > 
        <ul className="navbar">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </StyledNavbar>
    </div>
  )
}

export default Navbar