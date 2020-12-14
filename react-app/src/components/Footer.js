import React from 'react'
import styled from 'styled-components'

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
`

const Footer = () => {
  return (
    <MainFooter>
      <h1>LOGO</h1>
      <p>© 2020 Artisan Digital Asia</p>
    </MainFooter>
  )
}

export default Footer
