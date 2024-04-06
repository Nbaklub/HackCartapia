import React, {useState, useEffect} from "react";
import {Text, View, SafeAreaView, ScrollView} from "react-native";
import {Header} from "../components/Header";
import {News} from "../components/News";
import {collection, getDocs, query, where, orderBy, doc} from "firebase/firestore";
import {firestroe} from "../App";

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        const fetchNews = async () => {
            const NewsCollection = collection(firestroe, "News");
            const NewsSnapshot = await getDocs(query(NewsCollection));
            const NewsList = NewsSnapshot.docs.map(doc=>({...doc.data(), id: doc.id}));
            setNews(NewsList);
        }
        fetchNews();
    })
  return(
      <View>
          <Header />
          {/*News*/}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {news.map(news=>(
                  <News name={news.name} date={news.data} imageURL={news.image} />
              ))}
          </ScrollView>
      </View>
  );
}
export {Home};