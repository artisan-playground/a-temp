import React, {useState,createContext} from 'react'

export const TempValueContextWrapper = createContext({})

export default function TempValueContext(props) {

  const [temp1, setTemp1] = useState()
  const [temp2, setTemp2] = useState()
  const [maxTemp, setMaxTemp] = useState(0)
  const [minTemp, setMinTemp] = useState(1000)
  const [tempAvg, setTempAvg] = useState()

  return (
    <TempValueContextWrapper.Provider value={{temp1,setTemp1,temp2,setTemp2,maxTemp,setMaxTemp,minTemp, setMinTemp,tempAvg, setTempAvg}}>
      {props.children}
    </TempValueContextWrapper.Provider>
  )
}