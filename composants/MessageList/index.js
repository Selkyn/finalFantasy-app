import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const MessageList = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.messagesContainer}
     onPress={() => navigation.navigate('MessageDetails', {item})}> 
        <Image 
        source={{uri: 'https://i.ibb.co/N3gn4k2/pcloud-00.png'}}
        style={styles.messageImg}
        />

    <View style={styles.messagesInfo}>
        <View>
            <Text style={styles.name}>{item.fullname}</Text>
            <Text style={styles.date_name}>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <Text>{item.last_message}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default MessageList

