import React from 'react'
import Logo from '../../assets/logo.png'
import { Bars, Nav, NavLink, NavLogo, NavMenu } from './NavBarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={Logo} />
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/MAP" activeStyle>
            MAP
          </NavLink>
          <NavLink to="/REALTIME" activeStyle>
            REAL TIME
          </NavLink>
          <NavLink to="/GRAPH" activeStyle>
            GRAPH
          </NavLink>
          <NavLink to="/RANKING" activeStyle>
            RANKING
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
      </Nav>
    </>
  )
}

export default Navbar
