import React from "react";
import { StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import { Dimensions } from "react-native";

import Constants from "../Constants/Constants";
import Category from "../DummyData/Category";
import Deal from "../DummyData/Deal";


const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Amaan",
            appName: "Remedi",
        },
        this.category = [
            require('../assets/images/dental.png'),
            require('../assets/images/wellness.png'),
            require('../assets/images/homeo.png'),
            require('../assets/images/eyecare.png'),
            require('../assets/images/skinhair.png'),
        ],
        this.deal = [
            require('../assets/images/deal-1.png'),
            require('../assets/images/deal-2.png'),
        ]
    }

    renderCategories = (item, index) => {
        return (
            <TouchableOpacity style={styles.category}>
                <View style={[styles.categoryCircle,{backgroundColor: item.background}]}>
                    <Image source={this.category[index]} style={styles.categoryIcon}/>
                </View>
                <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderBanner = (item, index) => {
        return (
                <Image source={item} style={styles.bannerImage}/>
        );
    }

    renderDeal = (item, index) => {
        return (
            <TouchableOpacity style={styles.deal}>
                <View style={styles.dealImageView}>
                    <Image source={this.deal[index]} style={styles.dealImage}/>
                </View>
                <View style={styles.dealText}>
                    <Text style={styles.dealTitle} numberOfLines={2}>{item.title}</Text>
                    <Text style={styles.dealPrice}>₹ {item.price}</Text>
                </View>
                <View style={styles.viewDealRating}>
                    <Text style={styles.dealRating}>{item.rating}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <>
            <StatusBar backgroundColor={Constants.colors.primaryGreen} barStyle={'dark-content'}/>
                <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start',}}>
                    <View style={styles.welcome}>
                        <View style={styles.semicircle}/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
                            <Image source={Constants.img.cart} style={styles.cart}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
                            <Image source={Constants.img.profile} style={styles.profile}/>
                        </TouchableOpacity>
                        <Text style={styles.welcomeText}>Hi, {this.state.name}</Text>
                        <Text style={styles.welcomeSubText}>Welcome to {this.state.appName}</Text>
                        <TouchableOpacity style={styles.search}>
                            <Image source={Constants.img.search} style={styles.searchIcon}/>
                            <TextInput style={styles.searchText} placeholder="Search Medicines & Healthcare Products" placeholderTextColor={Constants.colors.translucentBlue}></TextInput>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.heading, {marginTop: 24}]}>
                        Top Categories
                    </Text>
                    <FlatList
                        horizontal
                        data={Category}
                        style={{marginTop: 8, marginHorizontal: 15, minHeight: 100,}}
                        renderItem={({item, index}) => (this.renderCategories(item, index))}/>
                    <FlatList
                        horizontal
                        data={Constants.img.banner}
                        style={{marginTop: 24}}
                        renderItem={({item, index}) => (this.renderBanner(item, index))}/>
                    <Text style={[styles.heading, {marginTop: 24}]}>
                        Deals of the Day
                    </Text>
                    <FlatList
                        horizontal
                        data={Deal}
                        style={{marginTop: 8, marginHorizontal: 15, minHeight: 275}}
                        renderItem={({item, index}) => (this.renderDeal(item, index))}/>
                    <View style={{height: 100}}/>
                </ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: Constants.colors.primaryGreen,
        fontSize: 20,
        fontFamily: Constants.fonts.bold,
    },
    subtitle: {
        color: Constants.colors.primaryGreen,
        fontSize: 15,
        fontFamily: Constants.fonts.light,
    },
    names: {
        color: Constants.colors.primaryGreen,
        fontSize: 12,
        fontFamily: Constants.fonts.regular,
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    welcome: {
        flex: 1,
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: 193,
        maxHeight: 193,
        width: '100%',
        backgroundColor: Constants.colors.primaryGreen,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        paddingStart: 35,
    },
    semicircle: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 300,
        height: 412,
        width: 412,
        top: 17,
        left: -211,
        opacity: 0.1,
    },
    cart: {
        position: 'absolute',
        width: 20,
        height: 20,
        top: 20,
        right: 20,
    },
    profile: {
        marginTop: 20,
        height: 45,
        width: 45,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    welcomeText: {
        color: 'white',
        fontSize: 24,
        fontFamily: Constants.fonts.bold,
    },
    welcomeSubText: {
        color: 'white',
        fontSize: 16,
        fontFamily: Constants.fonts.light,
    },
    search: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 50,
        width: '80%',
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    searchIcon: {
        height: 14,
        width: 17,
        marginStart: 15,
    },
    searchText: {
        color: Constants.colors.primaryGreen,
        fontSize: 13,
        fontFamily: Constants.fonts.regular,
        marginStart: 5,
    },
    heading: {
        color: Constants.colors.primaryBlue,
        fontSize: 16,
        fontFamily: Constants.fonts.semibold,
        alignSelf: 'flex-start',
        marginStart: 20,
    },
    category: {
        height: 98,
        width: 64,
        backgroundColor: 'white',
        borderRadius: 32,
        elevation: 3,
        alignContent: 'center',
        marginHorizontal: 5,
    },
    categoryCircle: {
        height: 48,
        width: 48,
        borderRadius: 100,
        backgroundColor: Constants.colors.primaryGreen,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        marginVertical: 8,
    },
    categoryIcon: {
        height: 16,
        width: 16,
    },
    categoryText: {
        color: Constants.colors.primaryBlue,
        fontSize: 11,
        fontFamily: Constants.fonts.light,
        marginTop: 5,
        textAlign: 'center',
    },
    bannerImage: {
        width: width*0.90,
        height: width*0.45,
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    deal: {
        width: 180,
        height: 270,
        marginHorizontal: 17,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
    },
    dealImageView: {
        width: 180,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#EEEEF0',
        justifyContent: 'center',
    },
    dealImage: {
        width: 109,
        height: 120,
        alignSelf: 'center',
    },
    dealTitle: {
        color: Constants.colors.primaryBlue,
        fontSize: 13,
        fontFamily: Constants.fonts.regular,
        marginStart: 10,
        width: 109,
        marginTop: 10,
    },
    dealPrice: {
        color: Constants.colors.primaryBlue,
        fontSize: 16,
        fontFamily: Constants.fonts.bold,
        marginStart: 10,
        marginTop: 5,
    },
    viewDealRating: {
        width: 48,
        height: 24,
        backgroundColor: '#FFC000',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 13,
        justifyContent: 'center',
    },
    dealRating: {
        color: 'white',
        fontSize: 13,
        fontFamily: Constants.fonts.bold,
        alignSelf: 'flex-end',
        marginEnd: 10,
    },
});