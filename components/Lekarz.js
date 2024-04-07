import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity, Linking} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const Lekarz = ({name, spec, imageURL, tel}) => {
    return(
        <View style={styles.main}>
            <Image style={styles.Image} source={{uri: imageURL}} />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.spec}>Specjalizacja: {spec}</Text>
            <TouchableOpacity style={{width: 30, height: 30, backgroundColor: 'green', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}} onPress={() => Linking.openURL(`tel:${tel}`)}>
                <Icon name="phone" size={20} color="black"/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        width: 150,
        height: 'auto',
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
        alignItems: "center",
        marginLeft: 10,
        paddingBottom: 10
    },
    Image: {
        alignItems: "center",
        width: 100,
        height: 100,
        resizeMode: "contain",
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: "center",
    },
    spec: {
        textAlign: 'left',
        marginBottom: 10
    }
})
export {Lekarz};