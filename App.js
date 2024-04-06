import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Screens/Home";

const firebaseConfig = {
  apiKey: "AIzaSyClfErRnK2YFbnQFhrcNr2Wk6LaHOCCxVE",
  authDomain: "hackcarpathia-2b7aa.firebaseapp.com",
  projectId: "hackcarpathia-2b7aa",
  storageBucket: "hackcarpathia-2b7aa.appspot.com",
  messagingSenderId: "391211336502",
  appId: "1:391211336502:web:05ad081cf2649ec43ba997",
  measurementId: "G-Y9PJTM6WMZ"
};
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();
const firestroe = getFirestore();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
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
