import React, { useState, Fragment } from 'react';
import {useSelector} from 'react-redux'

var mqtt    = require('mqtt')
var options = {
    protocol: 'mqtts',
    clientId: 'b0908853' + Math.random()   
}
var client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options);
client.subscribe('dii/+/status');

function DisplayCurrentTemporature() {
  
   const currentTemporature =  useSelector(state => state.currentTemporature)

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

   const [millis, setMillis] = useState()


    return (
    <>
      <div>
        {millis}
      </div>
    </>
  )
}

export default DisplayCurrentTemporature;