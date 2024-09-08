import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { FakeCharacter } from '../../fakeData/fakeCharacter'


const CharactersList = ({ navigation, selectedGame, selectedType }) => {
    // Filtre les personnages du jeu sélectionné
    // Si un jeu est sélectionné, `FakeCharacter` est filtré pour inclure uniquement les personnages de ce jeu.
    const filteredCharacters = selectedGame ? FakeCharacter.filter(character => character.game === selectedGame) : FakeCharacter;
    //filtre les personnages du type selectioné par rapport au jeu selectioné
    const filteredType = selectedType ? filteredCharacters.filter(character => character.type === selectedType) : FakeCharacter

    return (
      <View style={styles.charactersContainer}>
        {filteredType.map((character, index) => {
          return (
            <TouchableOpacity
              key={character.id}
              style={styles.characterCard}
              onPress={() => navigation.navigate('CharacterDetails', { item: character })}>
              <Image source={{ uri: character.img }} style={styles.characterImg} />
              <View>
                <Text style={styles.characterName}>{character.fullName}</Text>
                <Text style={styles.spec}>{character.speciality}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

export default CharactersList