import React,{useState,useEffect} from 'react'
import { ListTemp, ListComponents, CompoLeft, CompoRight, RealTime, BoxRealTime, RTDetails, Top, Bottom } from './ListElements'
import DisplayAvgTemporature from '../../services/DisplayAvgTemporature'
import DisplayCurrentTemporature from '../../services/DisplayCurrentTemporature'
import styled from 'styled-components'

const Value = styled.div`
  font-size: 25px;
  font-weight: bold;
  h1{
    font-size: 15px;
  }
`

const mqtt    = require('mqtt')
const options = {
  protocol: 'mqtts',
  clientId: 'b0908853' + Math.random()   
}
const client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options)
client.subscribe('dii/+/status')

    let note
    let minTemp = 0
    let maxTemp = 0
    let min = 0

const List = () => {
      
    const [temp, setTemp] = useState()

        client.on('connect', function () {
            console.log("connect")
        })
        client.on('message',function (topic, message) { 
            note = message.toString()
            note = JSON.parse(note)
            if ( note.d.myName ===  "Boat-001") {
                setTemp(note.d.temperature)            
            }
            
        })

    if (temp > maxTemp) {
        maxTemp = temp
    }

    if (min < minTemp) {
        minTemp = min
    }

    fetch(
        '/query?db=dii&q=SELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FArm-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)%3BSELECT%20mean(%22d_temperature%22)%20FROM%20%22v1%22%20WHERE%20(%22topic%22%20%3D%20%27dii%2FBoat-001%2Fstatus%27)%20AND%20time%20%3E%3D%20now()%20-%203h%20GROUP%20BY%20time(15s)%20fill(null)&epoch=ms'
    )



    return (
        <RealTime>
            <ListTemp>
                <ListComponents>
                    <CompoLeft>
                        <h1>Max</h1>
                    </CompoLeft>
                    <CompoRight>
                        <Value>
                            {maxTemp}                            
                        </Value>
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Min</h1>
                    </CompoLeft>
                    <CompoRight>
                        <Value>
                            {minTemp}                            
                        </Value>
                    </CompoRight>
                </ListComponents>
                <ListComponents>
                    <CompoLeft>
                        <h1>Average</h1>
                    </CompoLeft>
                    <CompoRight>
                        <DisplayAvgTemporature />
                    </CompoRight>
                </ListComponents>
            </ListTemp>
            <BoxRealTime>
                <RTDetails>
                    <Top>
                        <h2>NOW</h2>
                    </Top>
                    <Bottom>
                        <div>
                            {temp}
                        </div>
                    </Bottom>
                </RTDetails>
            </BoxRealTime>
        </RealTime>
    )
}

export default List