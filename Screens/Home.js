import React, {useState, useEffect} from "react";
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import {Header} from "../components/Header";
import {News} from "../components/News";
import {Lekarz} from "../components/Lekarz";
import {collection, getDocs, query} from "firebase/firestore";
import {firestroe, auth} from "../App";
import {onAuthStateChanged} from 'firebase/auth'

const Home = ({navigation}) => {
    const [news, setNews] = useState([]);
    const [restaurant, setRestaurant] = useState([]);
    const [lekarz, setLekarz] = useState([]);
    const [atrakcje, setAtrakcje] = useState([]);
    const [user, setUser] = useState(null); // Dodajemy stan dla zalogowanego użytkownika

    useEffect(() => {
        const fetchNews = async () => {
            const NewsCollection = collection(firestroe, "News");
            const NewsSnapshot = await getDocs(query(NewsCollection));
            const NewsList = NewsSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setNews(NewsList);
        };
        const fetchRestaurant = async () =>{
            const RestaurantCollection = collection(firestroe, "Restaurants");
            const RestaurantSnapshot = await getDocs(query(RestaurantCollection));
            const RestaurantList = RestaurantSnapshot.docs.map(doc =>({...doc.data(), id: doc.id}));
            setRestaurant(RestaurantList);
        }
        const fetchLekarz = async ()=>{
            const LekarzCollection = collection(firestroe, "Med");
            const LekarzSnapshot = await getDocs(query(LekarzCollection));
            const LekarzList = LekarzSnapshot.docs.map(doc =>({...doc.data(), id: doc.id}));
            setLekarz(LekarzList);
        }
        const fetchAtrakcje = async () => {
            const AtrakcjeCollection = collection(firestroe, "atrakcje");
            const AtrakcjeSnapshot = await getDocs(query(AtrakcjeCollection));
            const AtrakcjeList = AtrakcjeSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
            setAtrakcje(AtrakcjeList);
        };
        const user = auth.currentUser;
        if (user !== null) {
            setUser(user.uid);
        }

        fetchNews();
        fetchRestaurant();
        fetchLekarz();
        fetchAtrakcje();


    }, [user]);

    return (
        <View style={{marginBottom: 100}}>
            <Header navigation={navigation} user={user}/>
            <ScrollView>
                <Text style={{marginLeft: 20, fontWeight: '600', fontSize: 20, marginTop: 10}}>Newsy</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            style={{paddingBottom: 15, borderBottomWidth: 1}}>
                    {news.map(news => (
                        <News key={news.id} name={news.name} date={news.data} imageURL={news.image}/>
                    ))}
                </ScrollView>
                <Text style={{marginLeft: 20, fontWeight: '600', fontSize: 20, marginTop: 10}}>Restauracje</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            style={{paddingBottom: 15, borderBottomWidth: 1}}>
                    {restaurant.map(news => (
                        <News key={news.id} name={news.name} date={news.adres} imageURL={news.image}/>
                    ))}
                </ScrollView>
                <Text style={{
                    marginLeft: 20,
                    fontWeight: '600',
                    fontSize: 20,
                    marginTop: 10,
                    marginBottom: 10
                }}>Atrakcje</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            style={{paddingBottom: 15, borderBottomWidth: 1}}>
                    {atrakcje.map(news => (
                        <News key={news.id} name={news.name} date={news.adres} imageURL={news.image}/>
                    ))}
                </ScrollView>
                <Text style={{
                    marginLeft: 20,
                    fontWeight: '600',
                    fontSize: 20,
                    marginTop: 10,
                    marginBottom: 10
                }}>Lekarze</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            style={{paddingBottom: 15, borderBottomWidth: 1}}>
                    {lekarz.map(lekarz => (
                        <Lekarz key={lekarz.id} imageURL={lekarz.image} name={lekarz.name} tel={lekarz.number}
                                spec={lekarz.spec}/>
                    ))}
                </ScrollView>


            </ScrollView>
        </View>
    );
};

export {Home};
