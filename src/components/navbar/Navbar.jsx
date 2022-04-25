import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const [github, setGithub] = useState("");

  return (
    <Nav>
      <Logo to="/home">
        <i>{"<MBD>"}</i>
        <span>MyRecipe</span>
      </Logo>
      {/* hamburger kısmını Menu altına yazarsak hamburger aşağıda görünür. */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      {/* styleComponent in en önemli özelliklerinden biri prop gönderebiliyoruz. */}
      <Menu isOpen={isOpen}>
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </MenuLink>

        <MenuLink
          onClick={() =>
            setGithub((window.location.href = "https://github.com/Doganmbd"))
          }
          to={github}
          target="_blank"
        >
          Github
        </MenuLink>
        {/* target="_blank" is a special keyword that will open links in a new tab every time.
        target="blank" will open the first-clicked link in a new tab, but any future links that share target="blank" will open in that same newly-opened tab. */}

        <MenuLink  onClick={() => setIsOpen(!isOpen)} onMouseUp={()=> sessionStorage.clear()} to="/">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
