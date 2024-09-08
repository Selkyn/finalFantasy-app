import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style';
import { COLORS } from "../../outils/constantes";


const CharTypeItem = ({onPress ,item, isSelected}) => {
  return (
    <TouchableOpacity  onPress={onPress}>
        <View style={[
          styles.item,
          isSelected && {backgroundColor: COLORS.main}
          ]}>
          <Image 
            style={styles.itemImg} 
            source={ item.img } 
          />
          <Text>{item.libelle}</Text>
        </View>
    </TouchableOpacity>
  )
};

export default CharTypeItem