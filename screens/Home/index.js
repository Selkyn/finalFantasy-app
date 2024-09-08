import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import './style.js'
import homeStyles from './style.js'
import { FakeGame } from '../../fakeData/fakeGame.js'
import HospitalSvg from '../../assets/svg/pacman.svg';
import GameItem from '../../composants/GameItem/index.js'
import { FakeCharType } from '../../fakeData/fakeCharType.js'
import CharTypeItem from '../../composants/CharTypeItem/index.js'
import { FakeCharacter } from '../../fakeData/fakeCharacter.js'
import CharacterDetails from '../CharacterDetails/index.js'
import CharactersList from '../../composants/CharactersList/index.js'
import {  auth } from '../../FirebaseConfig';


const Home = ({item, navigation}) => {
  const user = auth.currentUser;

const [selectedGame, setSelectedGame] = useState(null);
const [selectedType, setSelectedType] = useState(null);
const [selectedGameId, setSelectedGameId] = useState(null);
const [selectedTypeId, setSelectedTypeId] = useState(null);

      const handleGamePress = (game, id) => {
        setSelectedGame(game);
        setSelectedGameId(id);
        console.log("Selected gameId:", game); // Vérifiez la valeur de selectedGame
        // console.log("Filtered characters:", FakeCharacter.filter(character => character.game === game));
      }

      const handleTypePress = (type, id) => {
        setSelectedType(type);
        setSelectedTypeId(id);
      }


  return (
    <ScrollView>

      {/* mon header */}
      <View style={homeStyles.header}>
        <Text style={homeStyles.userName}>{user ? user.email : ""}</Text>
        <Image source={require('./../../assets/cloud.jpg')} style={homeStyles.userImg} />
      </View>


      {/* liste des jeux */}
      <FlatList
        data={FakeGame}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <GameItem
             onPress={() => handleGamePress(item.game, item.id)}
            item={item}
            isSelected={item.id === selectedGameId}
          />
          )
        }} >
      </FlatList>

      {/* List des types de personnage */}
      <View style={homeStyles.title}>
        <Text>Quel contenu voulez-vous voir ?</Text>
      </View>

      <FlatList
        data={FakeCharType} //récupère les données des type de perso
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={homeStyles.scrollableList}
        renderItem={({ item }) => {
          return (
            <CharTypeItem
            onPress={() => handleTypePress(item.type, item.id)}
             item={item} 
             isSelected={item.id === selectedTypeId}
             />
          )
        }} >
      </FlatList>

      {/* Liste des personnages */}
      <View style={homeStyles.title_space_between}>
        <Text>Les personnages</Text>
      </View>
      <CharactersList selectedGame={selectedGame} selectedType={selectedType} navigation={navigation} />
    </ScrollView>
  )
}

export default Home
