import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import HospitalSvg from '../../assets/svg/pacman.svg'
import styles from './style'


const GameItem = ({ onPress,item, isSelected }) => {
    
  return (
    <TouchableOpacity style={[styles.scrollableListItem, isSelected && styles.selectedItem]} onPress={onPress}>
    <HospitalSvg width={48} height={48} />

    <Text style={styles.mainText}>{item.mainText}</Text>
    <Text style={styles.subText}>{item.subText}</Text>
  </TouchableOpacity>
  )
  
}

export default GameItem