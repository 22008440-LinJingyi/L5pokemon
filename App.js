import React from 'react';
import { View, Text, SectionList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
  },
  sectionHeaderText: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#dfe6ec",
    marginBottom: 5,
    borderWidth: 1,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  itemImage: {
    width: 270,
    height: 370,
  },
  addButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 5,
    paddingHorizontal: 130,
    marginTop: 50,


  },
  addButtonText: {
    color: 'whitesmoke',
    fontSize: 16,
    textAlign: 'center',
  },
});

const datasource = [
  {
    title: "FIRE",
    color: "red",
    icon: "fire",
    data: [
      { name: "Charmander", pic: "SV3pt5_EN_4-2x.png" },
      { name: "Charizard", pic: "SV3pt5_EN_6-2x.png" },
    ],
  },
  {
    title: "WATER",
    color: "blue",
    icon: "droplet",
    data: [
      { name: "Blastoise", pic: "SV3pt5_EN_9-2x.png" },
      { name: "Wartortle", pic: "SV3pt5_EN_8-2x.png" },
    ],
  },
  {
    title: "ELECTRIC",
    color: "#FFD700",
    icon: "bolt",
    data: [
      { name: "Pikachu", pic: "SV3pt5_EN_25-2x.png" },
      { name: "Raichu", pic: "SV3pt5_EN_26-2x.png" },
    ],
  },
];


const commonURL = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us";


const getPokemonImageUri = (pic) => `${commonURL}/${pic}`;


const PokemonListApp = () => {
  const handleItemPress = (name) => {
    Alert.alert(`${name}!`);
  };

  const handleAddPress = () => {
    Alert.alert("ADD POKEMON", "Functionality coming soon!");
  };

  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD POKEMON</Text>
        </TouchableOpacity>

        <SectionList
            sections={datasource}
            renderSectionHeader={({ section }) => (
                <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                  <Icon name={section.icon} size={20} color="whitesmoke" />
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItem} onPress={() => handleItemPress(item.name)}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Image source={{ uri: getPokemonImageUri(item.pic) }} style={styles.itemImage} />
                </TouchableOpacity>
            )}
        />
      </View>
  );
};



export default PokemonListApp;
