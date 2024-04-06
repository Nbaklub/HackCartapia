import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
const Menu = ({navigation}) => {
    return(
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
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
        height: "auto",
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,

    }
});
export {Menu};