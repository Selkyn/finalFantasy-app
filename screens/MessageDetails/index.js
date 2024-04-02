import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const MessageDetails = ({route, navigation}) => { //on recupere la route, navigation va me permettre de changer le nom du header
    const {item} = route.params; // on recupere le parametre de la route

    useEffect(() => {
        navigation.setOptions({title: item.fullname}) // on change le titre du header par le nom du mec
    })


  return (
    <View>
      <Text>MessageDetails {item.id}</Text>
    </View>
  )
}

export default MessageDetails