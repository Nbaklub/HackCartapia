import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";
const News = ({name, imageURL, date}) => {
    return(
      <View style={styles.main}>
          <Image style={styles.Image} source={{uri: imageURL}} />
          <Text style={styles.title}>{name}</Text>
          <Text style={{textAlign: 'center'}}>{date}</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        marginLeft: 10,
        width: 150,
        height: "auto",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'gray'
    },
    Image: {
        width: 146,
        height: 75,
        resizeMode: "stretch",
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
        textAlign: "center",
    }
})
export {News};