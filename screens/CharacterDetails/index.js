import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import styles from './style.js'

const CharacterDetails = ({route, navigation}) => {
    const {item} = route.params;
    
    useEffect(() => {
        navigation.setOptions({title: item.fullName})
    })
 
    return (
        <ScrollView style={styles.charDetailContainer}>
            <Image source={{uri: `${item.img}`}} style={styles.charDetailImg}/>
            <Text>Age : {item.age} ans</Text>
            <Text>Taille : {item.height} cm</Text>
            <Text>Arme : {item.weapon}</Text>
            <Text>Lieu de naissance : {item.birthCity}</Text>
            <Text>Date de naissance : {item.birthday}</Text>
            <Text>Famille : {item.family}</Text>
            <Text style={styles.charDetailHistory}>Histoire :  {item.description}</Text>
        </ScrollView>
  )
}

export default CharacterDetails