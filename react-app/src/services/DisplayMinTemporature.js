import React,{useState} from 'react'
import styled from 'styled-components'

const Min = styled.div`
  font-size: 25px;
  font-weight: bold;
`

var mqtt    = require('mqtt')
var options = {
    protocol: 'mqtts',
    clientId: 'b0908853' + Math.random()   
}
var client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options);
client.subscribe('dii/+/status');

function DisplayAvgTemporature() {
  const [minTemp, setMinTemp] = useState(0)
  const [temp, setTemp] = useState(0)
  var note;
  client.on('connect', function () {
    console.log("connect")
  });
  client.on('message', function (topic, message) {
      note = message.toString()
      note = JSON.parse(note)
  })

  // if (temp <= minTemp) {
  //   setMinTemp(temp)
  // }
  
  return (
    <>
      <Min>
        {minTemp}
      </Min>    
      <Min>
        {minTemp}
      </Min>
    </>
  )
}

export default DisplayAvgTemporature;