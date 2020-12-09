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
  
  const [millis, setMillis] = useState(0)

  var note;
  client.on('connect', function () {
     console.log("connect")
  });
  client.on('message', function (topic, message) {
    note = message.toString()
    note = JSON.parse(note)
    setMillis(note.d.temperature)
    console.log(topic, note.d.myName, note.d.temperature, note.d.humidity, note);
  })
  if (millis > maxTemp) {
    maxTemp = millis
    console.log(maxTemp)
  }
  if (millis <= minTemp) {
    minTemp = millis
    console.log(minTemp)
  }
  

    return (
    <>
      <div>
        {millis}
      </div>    
      <div>
        {millis}
      </div>
    </>
  )
}

export default DisplayCurrentTemporature;