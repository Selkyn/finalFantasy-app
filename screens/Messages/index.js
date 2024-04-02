import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../fakeData/fakeChats'
import MessageList from '../../composants/MessageList'
import styles from './style'

const Messages = ({navigation}) => {
  return (
    <FlatList data={fakeChats} 
    keyExtractor={item=>item.id}
    style={styles.root} 
    renderItem={({item}) => {
        return <MessageList item={item} navigation={navigation}/>
        
    }} />
  )
}

export default Messages