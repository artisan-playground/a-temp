import React, { Component } from 'react'
import ScrollspyNav from 'react-scrollspy-nav'
import styled from 'styled-components'
import Banner from '../assets/banner.png'
import BgGraph from '../assets/BgGraph.png'
import BgRanking from '../assets/BgRanking.png'
import Logo from '../assets/logo.png'
import Graph from '../components/Graph'
import List from '../components/List'
import { Bars, Nav, NavLink, NavLogo, NavMenu } from '../components/Navbar/NavBarElements'
import Ranking from '../components/Ranking'

const Title = styled.div`
  padding-top: 5vh;
  img {
    width: 100%;
  }
`

const Wrapper = styled.div`
  padding: 2% 10%;
  z-index: 1000;
  img {
    position: absolute;
    z-index: -1;
  }
`

class Home extends Component {
  render() {
    return (
      <>
        <ScrollspyNav
          scrollTargetIds={['section_1', 'section_2', 'section_3']}
          offset={-100}
          activeNavClass="is-active"
          scrollDuration="500"
          headerBackground="true"
        >
          <Nav>
            <NavLogo to="/">
              <img src={Logo} />
            </NavLogo>
            <Bars />
            <NavMenu>
              <NavLink>
                <a href="#section_1">MAP</a>
              </NavLink>
              <NavLink>
                <a href="#section_2">GRAPH</a>
              </NavLink>
              <NavLink>
                <a href="#section_3">RANKING</a>
              </NavLink>
            </NavMenu>
          </Nav>
        </ScrollspyNav>
        <Title>
          <img src={Banner} />
        </Title>
        <Wrapper>
          <div id="section_1">
            <List />
          </div>
          <img src={BgGraph} />
          <div id="section_2">
            <Graph />
          </div>
          <img src={BgRanking} />
          <div id="section_3">
            <Ranking />
          </div>
        </Wrapper>
      </>
    )
  }
}

export default Home
