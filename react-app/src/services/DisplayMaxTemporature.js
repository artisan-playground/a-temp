import React,{useState} from 'react'
import {useSelector} from 'react-redux'
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

function DisplayMvgTemporature() {
  const maxTemporature = useSelector(state => state.maxTemporature)

  var note;
  client.on('connect', function () {
    console.log("connect")
  });
  client.on('message', function (topic, message) {
      note = message.toString()
      note = JSON.parse(note)
      setMillis(note.d.millis)
      console.log(topic, note.d.myName, note.d.temp, note.d.humid, note);
  })

  const [millis, setMillis] = useState()

  return (
    <>
      <Max>
        {millis}
      </Max>    
      <Max>
        {millis}
      </Max>
    </>

  )
}

export default DisplayMvgTemporature;