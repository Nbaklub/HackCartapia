import React, {useState, useEffect} from "react";
import {View, ScrollView, StyleSheet, Text, Image} from "react-native";
import {Header} from "../components/Header";
import {collection, getDocs, query} from "firebase/firestore";
import {firestroe, auth} from "../App";
const Resst = ({ImageURL, Name, Adress, Mark}) => {
  return(
      <View style={{width: '90%', height: 500,}}>
          <Image style={{width: '100%', height: 300, resizeMode: 'contain', borderTopRightRadius: 15, borderTopLeftRadius: 15}} source={{uri: ImageURL}}/>
          <View style={{width: '100%', height: 200, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, backgroundColor: 'white',}}>
              <Text style={{padding: 20, fontSize: 20, fontWeight: "bold"}}>{Name}</Text>
              <Text style={{paddingLeft: 20, fontSize: 15}}>{Mark}/5  (192 oceny)</Text>
              <Text style={{paddingLeft: 20, fontSize: 15, marginTop: 70}}>Adres: {Adress}</Text>
          </View>
      </View>
  );
}
const Restaurant = ({navigation}) => {
    const [restaurant, setRestaurant] = useState([]);
    useEffect(() => {
        const fetchRestaurant = async () =>{
            const RestaurantCollection = collection(firestroe, "Restaurants");
            const RestaurantSnapshot = await getDocs(query(RestaurantCollection));
            const RestaurantList = RestaurantSnapshot.docs.map(doc =>({...doc.data(), id: doc.id}));
            setRestaurant(RestaurantList);
        }
        fetchRestaurant();
    }, []);
    return (
        <View>
            <Header navigation={navigation}/>
            <ScrollView style={{marginLeft: '5%', marginBottom: 100}}>
            {restaurant.map(restaurant =>(

                <Resst key={restaurant.id} ImageURL={restaurant.image} Name={restaurant.name} Adress={restaurant.adres} Mark={restaurant.mark} />
            ))}
            </ScrollView>
        </View>
    );
}
export {Restaurant};