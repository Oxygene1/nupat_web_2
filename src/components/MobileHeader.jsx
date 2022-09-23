import React,  { useState} from 'react';
import { NavLink,Link } from "react-router-dom";
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
   const Toggle2 = styled.button`
   cursor: pointer;
   display:flex;
   flex-direction: column;
    height: 4rem;
    width: 4rem;
    background-color: transparent;
    border-style: none;
    padding:0;
    margin:0;
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
   position: fixed;
    margin-top: 0px;
   top: 0;
    left: 50%;
   width: 100%;
   overflow-y: hidden;
   border-radius:4px;
   z-index:100;
   height: auto;
 
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
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
  width: 50%;
  height: 100vh;
  position:fixed;
  transform: (100%);
  transition: 1s ease;
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.5s forwards;
 
`
const Links = styled(NavLink)`
text-decoration: none;
color:#131E47;
margin-bottom: 1rem;
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
const Ssvg = styled.svg`
  width:27px;
  color:#131E47;
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
        <Toggle2 onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        <Ssvg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </Ssvg>
          </Toggle2>
          <Links exact activeClassName="active" className="active-link1" to="/">Home</Links>  
          <Links to="/About-us">About Us</Links>   
          <Links to="/code-camp">Code Camp</Links>
          <Links  to="/IT-Services">IT <span>Services</span></Links>
          <Hyper href="https://www.nupatinitiatives.org" target="_blank" rel="noreferrer">Nupat<span>Initiative</span></Hyper>

        </DropItemdiv>
        </Maindropdiv>
      
  </div>

  
    );
}
export default MobileHeader;