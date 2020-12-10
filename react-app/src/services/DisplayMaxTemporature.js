import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const Max = styled.div`
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

function DisplayMaxTemporature() {

  const [maxTemp, setMaxTemp] = useState(0)
  const [temp, setTemp] = useState(0)
  var note;
  client.on('connect', function () {
    console.log("connect")
  });
  client.on('message', function (topic, message) {
      note = message.toString()
      note = JSON.parse(note)
      setTemp(note.d.temperature)
  })
  

  if (temp > maxTemp) {
    setMaxTemp(temp)
  }
  
  return (
    <>
      <Max>
        {maxTemp}
      </Max>    
    </>

  )
}

export default DisplayMaxTemporature;