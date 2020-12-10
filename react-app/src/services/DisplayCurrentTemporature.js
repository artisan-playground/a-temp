import React, { useState, Fragment } from 'react';
import {useSelector} from 'react-redux'

var mqtt    = require('mqtt')
var options = {
    protocol: 'mqtts',
    clientId: 'b0908853' + Math.random()   
}
var client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options);
client.subscribe('dii/Boat-001/status');
let maxTemp = 0
let minTemp = 0

function DisplayCurrentTemporature() {
  
  const [temp, setTemp] = useState(0)

  var note;
  client.on('connect', function () {
     console.log("connect")
  });
  client.on('message', function (topic, message) {
    note = message.toString()
    note = JSON.parse(note)
    setTemp(note.d.temperature)
    console.log(topic, note.d.myName, note.d.temperature, note.d.humidity, note);
  })

  if (temp > maxTemp) {
    maxTemp = temp
    console.log(maxTemp)
  }
  if (temp <= minTemp) {
    minTemp = temp
    console.log(minTemp)
  }
  
    return (
    <>
      <div>
        {temp}
      </div>
    </>
  )
}

export default DisplayCurrentTemporature;