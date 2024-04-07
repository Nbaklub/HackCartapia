import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {auth, firestroe} from "../App";
import {collection, getDocs, query} from "firebase/firestore";

const Menu = ({navigation, user}) => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigation.navigate('Home')
        } catch (error) {
            console.error('Błąd podczas wylogowywania:', error);
        }
    };
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.options} /*Home*/ onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Strona Główna</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*News*/ onPress={() => navigation.navigate('News')}>
                <Text style={styles.text}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Medical*/ onPress={() => navigation.navigate('Medical')}>
                <Text style={styles.text}>Lekarze i specjaliści</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Traffic*/ onPress={() => navigation.navigate('Traffic')}>
                <Text style={styles.text}>Utrudnienia w ruchu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Spotted*/ onPress={() => navigation.navigate('Spotted')}>
                <Text style={styles.text}>Spotted</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Marketplace*/ onPress={() => navigation.navigate('Marketplace')}>
                <Text style={styles.text}>Marketplace</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Restaurations*/
                              onPress={() => navigation.navigate('Restaurant')}>
                <Text style={styles.text}>Restauracje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} /*Atractions*/ onPress={() => navigation.navigate('Marketplace')}>
                <Text style={styles.text}>Atrakcje</Text>
            </TouchableOpacity>
            {auth.currentUser !== null ? (
                <View style={styles.account}>
                    <Image style={{width: 70, height: 70, borderRadius: 35, resizeMode: 'contain'}}
                           source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/399316895_1336949526948583_5352875673154315983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7CuhE5jjPO8Ab4f1a3o&_nc_ht=scontent-ams2-1.xx&oh=00_AfDSX2l3QPaS3NUmnCGvoUmF4i0IBdkOmi5JKHW8YSgdGQ&oe=6617F7D0'}}/>
                    <Text style={{fontWeight: 'bold'}}>Mateusz Smardz</Text>
                    <TouchableOpacity onPress={handleLogout}>
                        <Text style={{marginTop: 5, color: 'red'}}>Wyloguj się</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity style={{
                    marginTop: '70%',
                    width: 'auto',
                    height: 'auto',
                    padding: 10,
                    backgroundColor: '#0066CC',
                    alignItems: 'center',
                    borderRadius: 25
                }} onPress={()=>navigation.navigate('Login')}>
                    <Text>Zaloguj się</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
   main:  {
       width: '100%',
       height: '100%',
       paddingTop: 100,
       alignItems: "center"
   },
    options: {
        width: '95%',
        borderBottomWidth: 1,
        borderColor: 'black',
        height: "auto",
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    account:{
        marginTop: '70%',
        alignItems: "center",

    }
});
export {Menu};