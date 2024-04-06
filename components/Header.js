import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const Header = () => {
    return (
        <View style={styles.main}>

            <Icon name="menu" size={40} color="black"/>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'gray',
        width: '100%',
        height: 90,
        paddingTop: 40,
        paddingLeft: 10
    }
})
export {Header};