import React from "react";
import {View, Text, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView} from "react-native";
import {Header} from "../components/Header";
import Icon from 'react-native-vector-icons/FontAwesome'
import {auth} from "../App";

const Spotted = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', width: '100%'}}>
            <Header navigation={navigation}/>
            <ScrollView style={{marginBottom: 100, marginLeft: '5%'}} showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/399316895_1336949526948583_5352875673154315983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7CuhE5jjPO8Ab4f1a3o&_nc_ht=scontent-ams2-1.xx&oh=00_AfDSX2l3QPaS3NUmnCGvoUmF4i0IBdkOmi5JKHW8YSgdGQ&oe=6617F7D0'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Mateusz Smardz</Text>
                    </View>
                    <Text style={{paddingTop: 10}}>Jakie jest najlepsze miejsce na jednodniowe zwiedzanie w Rzeszowie i
                        okolicach?</Text>
                    <View style={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                        paddingBottom: 10,
                        marginTop: 15,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Icon name="comment-o" size={25} color="black"/>
                        <Text style={{paddingLeft: 5}}>3 komentarze</Text>
                    </View>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                {auth.currentUser !== null ?(
                    <View style={styles.napisz}>
                        <View style={{
                            width: '80%',
                            height: 'auto',
                            padding: 5,
                            borderRadius: 10,
                            borderWidth: 1,
                            backgroundColor: 'white'
                        }}>
                            <Text>Odpowiedz</Text>
                        </View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            width: '25%',
                            height: 'auto',
                            padding: 10,
                            backgroundColor: '#0066CC',
                            alignItems: 'center',
                            borderRadius: 25
                        }} onPress={()=>navigation.navigate('Login')}>
                            <Text>Opublikuj</Text>
                        </TouchableOpacity>
                    </View>
                ) :(
                    <View style={styles.napisz}>

                        <Text>Musisz być zalogowany aby publikować treści</Text>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            width: 'auto',
                            height: 'auto',
                            padding: 10,
                            backgroundColor: '#0066CC',
                            alignItems: 'center',
                            borderRadius: 25
                        }} onPress={()=>navigation.navigate('Login')}>
                            <Text>Zaloguj się</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.main}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/399316895_1336949526948583_5352875673154315983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7CuhE5jjPO8Ab4f1a3o&_nc_ht=scontent-ams2-1.xx&oh=00_AfDSX2l3QPaS3NUmnCGvoUmF4i0IBdkOmi5JKHW8YSgdGQ&oe=6617F7D0'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Mateusz Smardz</Text>
                    </View>
                    <Text style={{paddingTop: 10}}>Jakie jest najlepsze miejsce na jednodniowe zwiedzanie w Rzeszowie i
                        okolicach?</Text>
                    <View style={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                        paddingBottom: 10,
                        marginTop: 15,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Icon name="comment-o" size={25} color="black"/>
                        <Text style={{paddingLeft: 5}}>3 komentarze</Text>
                    </View>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                <View style={styles.odp}>
                    <View style={{width: 'auto', height: 'auto', flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                               source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-9/70201278_1798132367000325_6947559975845625856_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=LUwwr1PDxxEAb4wNGp_&_nc_ht=scontent-ams2-1.xx&oh=00_AfBQsQD8y5-PUcvUbNJ_UpzDKQ9uk31DlqyDEcCHW051-g&oe=66398A86'}}/>
                        <Text style={{paddingLeft: 10, fontWeight: '800'}}>Jacek Sarzyński</Text>
                    </View>
                    <Text style={{paddingTop: 10, paddingBottom: 10}}>Zamek w Łańcuci. Chyba najlepsza opcja.
                        Architektura piękna no i kawał historii</Text>
                </View>
                {auth.currentUser !== null ?(
                    <View style={styles.napisz}>
                        <View style={{
                            width: '80%',
                            height: 'auto',
                            padding: 5,
                            borderRadius: 10,
                            borderWidth: 1,
                            backgroundColor: 'white'
                        }}>
                            <Text>Odpowiedz</Text>
                        </View>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            width: '25%',
                            height: 'auto',
                            padding: 10,
                            backgroundColor: '#0066CC',
                            alignItems: 'center',
                            borderRadius: 25
                        }}>
                            <Text>Opublikuj</Text>
                        </TouchableOpacity>
                    </View>
                ) :(
                    <View style={styles.napisz}>

                        <Text>Musisz być zalogowany aby publikować treści</Text>
                        <TouchableOpacity style={{
                            marginTop: 10,
                            width: 'auto',
                            height: 'auto',
                            padding: 10,
                            backgroundColor: '#0066CC',
                            alignItems: 'center',
                            borderRadius: 25
                        }}>
                            <Text>Zaloguj się</Text>
                        </TouchableOpacity>
                    </View>
                        )}


            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    main: {
        marginTop: 20,
        width: '90%',
        height: "auto",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#FFE1E1'
    },
    odp: {
        width: '90%',
        height: "auto",
        padding: 10,
        backgroundColor: '#99FFFF',
        borderBottomWidth: 2
    },
    napisz: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        alignItems: "center",
        width: '90%'
    }
})
export {Spotted};
