import React, { useContext } from 'react'
import styled from 'styled-components'
import { TempValueContextWrapper } from '../../contexts/TempValueContext'
import {
  Bottom,
  BoxRealTime,
  CompoLeft,
  CompoRight,
  ListComponents,
  ListTemp,
  RealTime,
  RTDetails,
  Top
} from './ListElements'

const Value = styled.div`
  font-size: 25px;
  font-weight: bold;
  h1 {
    font-size: 15px;
  }
`

const List = () => {
  const { temp1, maxTemp, minTemp, tempAvg } = useContext(TempValueContextWrapper)

  // fetch(
  //     '/query?db=dii&q=SELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FArm-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)%3BSELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FBoat-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)&epoch=ms'
  // )

  return (
    <RealTime>
      <ListTemp>
        <ListComponents>
          <CompoLeft>
            <h1>Max</h1>
          </CompoLeft>
          <CompoRight>
            <Value>{maxTemp}</Value>
          </CompoRight>
        </ListComponents>
        <ListComponents>
          <CompoLeft>
            <h1>Min</h1>
          </CompoLeft>
          <CompoRight>
            <Value>{minTemp}</Value>
          </CompoRight>
        </ListComponents>
        <ListComponents>
          <CompoLeft>
            <h1>Average</h1>
          </CompoLeft>
          <CompoRight>
            <Value>{tempAvg}</Value>
          </CompoRight>
        </ListComponents>
      </ListTemp>
      <BoxRealTime>
        <RTDetails>
          <Top>
            <h2>NOW</h2>
          </Top>
          <Bottom>
            <div>{temp1}</div>
          </Bottom>
        </RTDetails>
      </BoxRealTime>
    </RealTime>
  )
}

export default List
