
import React, { useState, Fragment } from 'react'
import {CURRENTLY} from '../redux/constants/Temporature'
import {useDispatch} from 'react-redux'

var mqtt    = require('mqtt');
var options = {
    protocol: 'mqtts',
    // clientId uniquely identifies client
    // choose any string you wish
    clientId: 'b0908853' + Math.random()   
};
var client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options);

// preciouschicken.com is the MQTT topic
client.subscribe('dii/+/status');

 export default function Connection()  {
    const dispatch = useDispatch()
    var note;
    client.on('connect', function () {
      console.log("connect")
    });
    client.on('message', function (topic, message) {
        note = message.toString();
        note = JSON.parse(note);
        // Updates React state with message 
        // setMesg(note);
        console.log(topic, note.d.myName, note.d.temp, note.d.humid, note);
        dispatch({ type: CURRENTLY, temp: note})
    })
    
    return (
        <>
        </>
    )
}

