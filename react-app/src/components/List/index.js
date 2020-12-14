import React, { useContext } from 'react'
import { TempValueContextWrapper } from '../../contexts/TempValueContext'
import Map from '../../layout/map'
import TempBox from '../../layout/TempBox'
import {
  BoxRealTime,
  ListTemp,
  RealTime,
  Wrapper
} from './ListElements'


const List = () => {
  const {maxTemp, minTemp, tempAvg} = useContext(TempValueContextWrapper)

  // fetch(
  //     '/query?db=dii&q=SELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FArm-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)%3BSELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FBoat-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)&epoch=ms'
  // )

  return (

    <RealTime>

      <ListTemp>

        <TempBox Hander='MAX' Temp={maxTemp} />

        <TempBox Hander='MIN' Temp={minTemp} />

        <TempBox Hander='NOW' Temp={tempAvg} />

      </ListTemp>

      <BoxRealTime>
        <Wrapper>
          <Map />
        </Wrapper>
      </BoxRealTime>

    </RealTime>

  )
}

export default List
