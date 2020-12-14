import React, { useContext } from 'react'
import { TempValueContextWrapper } from '../contexts/TempValueContext'

let note

const mqtt    = require('mqtt')
const options = {
    protocol: 'mqtts',
    clientId: 'b0908853' + Math.random()
}
const client  = mqtt.connect('mqtt://mqtt.artisandigital.tech:8883', options)
client.subscribe('dii/+/status')

const Connection = () => {

    const {temp1,setTemp1,temp2,setTemp2,maxTemp,setMaxTemp,minTemp,setMinTemp,setTempAvg}= useContext(TempValueContextWrapper)

    client.on('connect', function () {
        console.log("connect")
    })
    client.on('message',async function (topic, message) {
        note = message.toString()
        note = JSON.parse(note)
        if ( note.d.myName ===  "Boat-001") {
            setTemp1(note.d.temperature)
        }
        if ( note.d.myName ===  "Arm-001") {
            setTemp2(note.d.temperature)
        }
    })

    if (temp1 < minTemp && temp1 !== null) {
        setMinTemp(temp1)
        if (temp2 < minTemp && temp1 !== null) {
          setMinTemp(temp2)
        }
    }
    if (temp2 < minTemp && temp1 !== null) {
        setMinTemp(temp2)
        if (temp1 < minTemp && temp1 !== null ) {
          setMinTemp(temp1)
        }
    }

    if (temp1 > maxTemp) {
        setMaxTemp(temp1)
        if (temp2 > maxTemp) {
          setMaxTemp(temp2)
        }
      }
    if (temp2 > maxTemp) {
        setMaxTemp(temp2)
        if (temp1 > maxTemp) {
          setMaxTemp(temp1)
        }
    }

    setTempAvg(Math.round((temp1+temp2)/2))

    console.log(minTemp)

    return (
        <>
        </>
    )
}

export default Connection
