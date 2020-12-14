import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'

const MainFooter = styled.footer`
  padding: 2%;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    padding: 5px;
    background-color: gray;
  }
  img{
      width: 5rem;
      padding-bottom: 1rem;
  }
`

const Footer = () => {
  return (
    <MainFooter>
      <img src={Logo} />
      <p>© 2020 Artisan Digital Asia</p>
    </MainFooter>
  )
}

export default Footer
