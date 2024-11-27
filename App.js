import React from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
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
            { name: "Charmander", num: "4" },
            { name: "Charizard", num: "6" },
        ],
    },
    {
        title: "WATER",
        color: "blue",
        icon: "droplet",
        data: [
            { name: "Blastoise", num: "9" },
            { name: "Wartortle", num: "8" },
        ],
    },
    {
        title: "ELECTRIC",
        color: "#FFD700",
        icon: "bolt",
        data: [
            { name: "Pikachu", num: "25" },
            { name: "Raichu", num: "26" },
        ],
    },
];

const PokemonListApp = () => {
    const handleItemPress = (item) => {
        Alert.alert(`${item.name}`);
    };

    const handleAddPress = () => {
        Alert.alert("ADD POKEMON", "This functionality will be implemented soon!");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD POKEMON</Text>
            </TouchableOpacity>

            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.name + index}
                renderSectionHeader={({ section }) => (
                    <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                        <Icon name={section.icon} size={20} color="whitesmoke" />
                        <Text style={styles.sectionHeaderText}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => {
                    let imagelink = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.num}-2x.png`;
                    return (
                        <TouchableOpacity style={styles.listItem} onPress={() => handleItemPress(item)}>
                            <Text style={styles.itemText}>
                                {item.name}
                            </Text>
                            <Image source={{ uri: imagelink }} style={styles.itemImage} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default PokemonListApp;
