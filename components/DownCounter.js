import { View, Text } from 'react-native'
import CountDown from 'react-native-countdown-component';
import React from 'react'

export default function DownCounter({time}) {
    return (
        <CountDown
        
          until={time}
          size={30}
          onFinish={() => alert('Finished')}
          digitStyle={{backgroundColor: '#798478' , borderRadius:10 }}
          digitTxtStyle={{color: '#78586F', fontSize : 35}}
          timeToShow={['M', 'S']}
          timeLabels={{m: 'MM', s: 'SS'}}
          timeLabelStyle={{ color: '#78586F' , fontSize:20 , fontWeight: "bold" }}
        />
      )
}