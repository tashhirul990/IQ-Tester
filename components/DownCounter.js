import { View, Text } from 'react-native'
import CountDown from 'react-native-countdown-component';
import React from 'react'

export default function DownCounter({time, setTime , running}) {
  
  return (
        <CountDown

          until={30}
          size={20}
          digitStyle={{backgroundColor: '#798478' , borderRadius:10 }}
          digitTxtStyle={{color: '#78586F', fontSize : 35}}
          timeToShow={['M', 'S']}
          timeLabels={{m: 'MM', s: 'SS'}}
          timeLabelStyle={{ color: '#78586F' , fontSize:20 , fontWeight: "bold" }}
          running = {running}
          onChange={ ()=> setTime( time-1 ) }
        />
      )
}