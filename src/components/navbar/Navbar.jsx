import React,{useState} from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyle";



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<MBD>"}</i>
        <span>MyRecipe</span>
      </Logo>
{/* hamburger kısmını Menu altına yazarsak hamburger aşağıda görünür. */}
      <Hamburger onClick={()=> setIsOpen(!isOpen)} >
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      {/* styleComponent in en önemli özelliklerinden biri prop gönderebiliyoruz. */}
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>

        <MenuLink to="/github">Github</MenuLink>

        <MenuLink to="/">Logout</MenuLink>
      </Menu>


    </Nav>
  );
};

export default Navbar;
