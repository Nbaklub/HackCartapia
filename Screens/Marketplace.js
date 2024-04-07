import React from "react";
import {View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView} from "react-native";
import {Header} from "../components/Header";
import Icon from 'react-native-vector-icons/Entypo'
const Marketplace = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <ScrollView style={{marginBottom: 100}} showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center'}}>
                    <View style={{width: '90%', height: 'auto', borderRadius: 20}}>
                        <Image style={{
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            resizeMode: 'contain',
                            width: 'auto',
                            height: 300
                        }} source={{uri: 'https://bi.im-g.pl/im/e1/d3/1c/z30226657IH,iPhone-15-Pro.jpg'}}/>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        width: '90%',
                        height: 'auto',
                        padding: 15,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, width: '80%'}}>Iphone 15 Pro</Text>
                            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text>4500,00 zł</Text>
                            </View>
                        </View>
                        <Text style={{marginTop: 20,}}>
                            Nowy Iphone 15 Pro. Telefon sprzedaje z powodu zbyt dużego rozmiaru. Cała dokumentacja,
                            faktura
                            vat, kabel oraz pudełko. Możliwość odbioru osobistego na ulicy Lwowoskiej. Telefon Opłacony
                            z
                            góry. Możliwa także wymiana z dopłatą mna iphona 13 mini.
                        </Text>
                        <View style={{
                            width: 'auto',
                            height: 'auto',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                                   source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/399316895_1336949526948583_5352875673154315983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7CuhE5jjPO8Ab4f1a3o&_nc_ht=scontent-ams2-1.xx&oh=00_AfDSX2l3QPaS3NUmnCGvoUmF4i0IBdkOmi5JKHW8YSgdGQ&oe=6617F7D0'}}/>
                            <Text style={{paddingLeft: 10, fontWeight: '800'}}>Mateusz Smardz</Text>
                            <TouchableOpacity style={{
                                width: 30,
                                height: 30,
                                backgroundColor: 'green',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '50%'
                            }} onPress={() => Linking.openURL(`tel:693692519`)}>
                                <Icon name="phone" size={20} color="black"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width: '90%', height: 'auto', borderRadius: 20, marginTop: 20}}>
                        <Image style={{
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            resizeMode: 'contain',
                            width: 'auto',
                            height: 300
                        }} source={{uri: 'https://bi.im-g.pl/im/e1/d3/1c/z30226657IH,iPhone-15-Pro.jpg'}}/>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        width: '90%',
                        height: 'auto',
                        padding: 15,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, width: '80%'}}>Iphone 15 Pro</Text>
                            <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text>4500,00 zł</Text>
                            </View>
                        </View>
                        <Text style={{marginTop: 20,}}>
                            Nowy Iphone 15 Pro. Telefon sprzedaje z powodu zbyt dużego rozmiaru. Cała dokumentacja,
                            faktura
                            vat, kabel oraz pudełko. Możliwość odbioru osobistego na ulicy Lwowoskiej. Telefon Opłacony
                            z
                            góry. Możliwa także wymiana z dopłatą mna iphona 13 mini.
                        </Text>
                        <View style={{
                            width: 'auto',
                            height: 'auto',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 20
                        }}>
                            <Image style={{width: 30, height: 30, borderRadius: 15, resizeMode: 'contain'}}
                                   source={{uri: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/399316895_1336949526948583_5352875673154315983_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7CuhE5jjPO8Ab4f1a3o&_nc_ht=scontent-ams2-1.xx&oh=00_AfDSX2l3QPaS3NUmnCGvoUmF4i0IBdkOmi5JKHW8YSgdGQ&oe=6617F7D0'}}/>
                            <Text style={{paddingLeft: 10, fontWeight: '800'}}>Mateusz Smardz</Text>
                            <TouchableOpacity style={{
                                width: 30,
                                height: 30,
                                backgroundColor: 'green',
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '50%'
                            }} onPress={() => Linking.openURL(`tel:693692519`)}>
                                <Icon name="phone" size={20} color="black"/>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

})
export {Marketplace};
