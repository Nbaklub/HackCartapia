import React from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Header = ({ navigation }) => {

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <Icon name="menu" size={40} color="black"/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: 90,
        paddingTop: 40,
        paddingLeft: 10
    }
})
export {Header};