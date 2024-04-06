import React, {useState, useEffect} from "react";
import {Text, View, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import {Header} from "../components/Header";
import {News} from "../components/News";
import {collection, getDocs, query, where, orderBy, doc} from "firebase/firestore";
import {firestroe} from "../App";
/*import axios from "axios";*/
const Home = ({navigation}) => {

    /*const [response, setResponse]=useState('')*/
    const [news, setNews] = useState([]);
    /*const fetchAIResponse = async () => {
        const apiKey = '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'
        const prompt = 'Czy treść posta jest odpowiednia: "Jebać pis" Jeśli tak napisz: "Tak" jeśli nie napisz: "NIE"'
        try {
            const result = await axios.post(
                'https://api.openai.com/v1/engines/davinci-codex/completions',
                {
                    prompt: prompt,
                    max_tokens: 50,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    },
                },
            )
            setResponse(result.data.choices[0].text)
        } catch (error) {
            console.error('Error fetching AI response:', error)
        }
    }*/

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
          <Header navigation={navigation} />
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