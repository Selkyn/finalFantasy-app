import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { FakeDoctor } from '../../fakeData/fakeDoctor'


const CharactersList = ({ navigation }) => {
    return (
      <View style={styles.doctorsContainer}>
        {FakeDoctor.map((doctor, index) => {
          return (
            <TouchableOpacity
              key={doctor.id}
              style={styles.doctorCard}
              onPress={() => navigation.navigate('CharacterDetails', { item: doctor })}>
              <Image source={{ uri: doctor.img }} style={styles.doctorImg} />
              <View>
                <Text style={styles.doctorName}>{doctor.fullName}</Text>
                <Text style={styles.spec}>{doctor.speciality}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

export default CharactersList