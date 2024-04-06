import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Screens/Home";
import {Menu} from "./components/meun";
import {Marketplace} from "./Screens/Marketplace";
import {Medical} from "./Screens/Medical";
import {News} from "./Screens/News";
import {Spotted} from "./Screens/Spotted";
import  {Traffic} from "./Screens/Traffic";

const firebaseConfig = {
  apiKey: "AIzaSyCQjHkM1ht8ui5JWbKg1rWakv35vkQ6MwM",
  authDomain: "hackcarpathia-f61c2.firebaseapp.com",
  projectId: "hackcarpathia-f61c2",
  storageBucket: "hackcarpathia-f61c2.appspot.com",
  messagingSenderId: "507050575649",
  appId: "1:507050575649:web:bba215071c5faa1a45e060",
  measurementId: "G-8X8HB1ZPD1"
};
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
const firestroe = getFirestore();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
          <Stack.Screen name="Marketplace" component={Marketplace} options={{headerShown: false}} />
          <Stack.Screen name="Medical" component={Medical} options={{headerShown: false}} />
          <Stack.Screen name="News" component={News} options={{headerShown: false}} />
          <Stack.Screen name="Spotted" component={Spotted} options={{headerShown: false}} />
          <Stack.Screen name="Traffic" component={Traffic} options={{headerShown: false}} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}
export {firestroe};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
