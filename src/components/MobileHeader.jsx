import React,  { useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../Images/Logo.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
// import MainDropDown from './MainDropDown';
   function MobileHeader(e) {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    
   const DropHamburger1 = styled.span`
   background-color: #fff;
   width:2.5rem;
   height:4px;
  //  margin-top:.5rem;
  //  margin-bottom:1rem;
  //  padding:.5rem;
    // border: 2px solid pink;
    border-radius: 4px;
   `
   const DropHamburger2 = styled.span`
   background-color: #fff;
   width:2.5rem;
   height:4px;
    margin-top:.5rem;
  //  margin-bottom:1rem;
  //  padding:.5rem;
  //  border: 2px solid red;
   border-radius: 4px;
   `
   const DropHamburger3 = styled.span`
   background-color: #fff;
   width:2.5rem;
   height:4px;
   margin-top:.5rem;
  //  margin-bottom:1rem;
  //  padding:.5rem;
  //  border: 2px solid green;
   border-radius: 4px;
   `
   
   const DropdownDiv = styled.div`
   position: absolute;
   top: 3vw;
   right: 5%;
   
   `
   const Toggle = styled.button`
   align-items: center;
   border-style: none;
   padding: 10px;
   background-color: transparent;
   cursor: pointer;
   display:flex;
   flex-direction: column;
    height: 4rem;
    width: 4rem;
   `
   const NavContainer = styled.div`
   display: none;
   @media (max-width: 768px) {
    display: block;
    flex-direction: colomn;
    position: relative;
   }
   
   `
   const Maindropdiv = styled.div`
   position: absolute;
    margin-top: 0px;
   top: 10%;
   right: 4%;
  //  width: auto;
   width: 70%;
   overflow-y: hidden;
   border-radius:4px;
   z-index:100;
   height: auto;
   padding:1rem;
   `
  const BrandLogo =styled.img`
  width:6rem;
  heigth:6rem;
  `
  const Loogodiv = styled.div`
  position: absolute;
  // margin-bottom: 1.5rem;
  margin-left: -2rem;
  width: 6rem;
  `
  const Nav2 = styled.div`
  display: none;
  @media (max-width: 786px){
  display:flex;
  background-color: #131E47;
  // height:5em;
  align-items: center;
  width: 100%;
  padding: 3rem;
 }
  
  `
  const DropItemdiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 2rem;
  // position:relative;
  // z-index: 50;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
`
const Links = styled(Link)`
text-decoration: none;
color:#131E47;
&:hover{
  color:#131E47;
  padding: 1rem;
}
`
const Hyper = styled.a`
text-decoration: none;
color:#131E47;
&:hover{
  color:#131E47;
  padding: 1rem;
}
`
   
  

    return (
  <div>

        <NavContainer>
          <Nav2>
              <Loogodiv>
                <Link to='/'>
                  <BrandLogo src={logo} alt="Logo" />
                </Link>
              </Loogodiv>
              <DropdownDiv>
                  <Dropdown>
                  <Toggle onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    <DropHamburger1/>
                    <DropHamburger2/>
                    <DropHamburger3/>
                  </Toggle>

              </Dropdown>
            </DropdownDiv>
          </Nav2>
        </NavContainer>

        <Maindropdiv className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <DropItemdiv>
  
          <Links  to="/">Home</Links>     
          <Links to="/enrollment">Code Camp</Links>
          <Links  to="/Services">IT <span>Services</span></Links>
          <Hyper href="#" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></Hyper>

        </DropItemdiv>
        </Maindropdiv>
      
  </div>

  
    );
}
export default MobileHeader;