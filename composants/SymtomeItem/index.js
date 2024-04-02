import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.jpg';
import styles from '../SymtomeItem/style';

// const imageMapping = {
//     'img1.jpg': img1,
//     'img2.png': img2,
//     'img3.jpg': img3
//   };

const SymptomeItem = ({item}) => {
    // const imageSource = imageMapping[item.img];

  return (
    <TouchableOpacity >
        <View style={styles.item}>
        {/* {imageSource && <Image style={styles.itemImg} source={imageSource} />} */}
        <Image 
        style={styles.itemImg} 
        source={require(`../../assets/img/img1.jpg`)} 
        />
            <Text>{item.libelle}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default SymptomeItem