import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import './style.js'
import homeStyles from './style.js'
import { FakeActivity } from '../../fakeData/fakeActivity.js'
// import { SvgXml } from 'react-native-svg';
import HospitalSvg from '../../assets/svg/pacman.svg';
import ActivityItem from '../../composants/ActivityItem/index.js'
import { FakeSymptome } from '../../fakeData/fakeSymptome.js'
import SymptomeItem from '../../composants/SymtomeItem/index.js'
import { FakeDoctor } from '../../fakeData/fakeDoctor.js'

const Home = () => {

  return (
    <ScrollView>

      {/* mon header */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>Selkyn Kimery</Text>
        <Image source={require('./../../assets/cloud.jpg')} style={homeStyles.userImg} />
      </View>


      {/* liste des activités */}
      <FlatList
        data={FakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <ActivityItem item={item} />
          )
        }} >

      </FlatList>

      {/* List des symptomes */}
      <View style={homeStyles.title}>
        <Text>Quels symptomes avez vous ?</Text>
      </View>

      <FlatList
        data={FakeSymptome}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <SymptomeItem item={item} />
          )
        }} >
      </FlatList>

      {/* Liste des docteurs */}
      <View style={homeStyles.title_space_between}>
        <Text>Nos docteurs</Text>
        <TouchableOpacity>
          <Text style={homeStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={homeStyles.doctorsContainer}>
        {FakeDoctor.map((doctor, index) => {
          return (
            <TouchableOpacity key={doctor.id} style={homeStyles.doctorCard}>

            <Image source={{uri: `${doctor.img}`}} style={homeStyles.doctorImg} />
              <View>
                <Text style={homeStyles.doctorName}>{doctor.fullName}</Text>
                <Text style={homeStyles.spec}>{doctor.speciality}</Text>
              </View>

            </TouchableOpacity>
          );
        })}
      </View>

    </ScrollView>
  )
}

export default Home