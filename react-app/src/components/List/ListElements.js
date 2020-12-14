import styled from 'styled-components'

export const ListTemp = styled.div`
  flex: 1;
  height: 70vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const RealTime = styled.div`
  display: flex;
`

export const BoxRealTime = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50px;
  font-weight: bold;
  background-color: rgba(150, 231, 247, 1);
  h2 {
    font-size: 40px;
    margin: 20px 0;
  }
  h1 {
    font-size: 65px;
  }
  p {
    font-size: 20px;
    margin: 20px 0;
  }
`
