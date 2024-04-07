import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {getAuth} from 'firebase/auth';
import {Home} from "./Screens/Home";
import {Menu} from "./components/meun";
import {Marketplace} from "./Screens/Marketplace";
import {Medical} from "./Screens/Medical";
import {News} from "./Screens/News";
import {Spotted} from "./Screens/Spotted";
import  {Traffic} from "./Screens/Traffic";
import {Login} from "./Screens/Login";
import {Restaurant} from "./Screens/Restaurant";

const firebaseConfig = {
  apiKey: "AIzaSyAvT2X_rFkkAR9rNZ4vrzd32uH8vgzO_fM",
  authDomain: "hackathon-18f7d.firebaseapp.com",
  projectId: "hackathon-18f7d",
  storageBucket: "hackathon-18f7d.appspot.com",
  messagingSenderId: "1052112409731",
  appId: "1:1052112409731:web:865dbc9b0ec90d1e94b7b6",
  measurementId: "G-N1Y88RPC0F"
};
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
const firestroe = getFirestore();
const auth = getAuth()
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
          <Stack.Screen name="Restaurant" component={Restaurant} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}
export {firestroe, auth};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
