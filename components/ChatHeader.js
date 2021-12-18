import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
const Header = () => {
    return (
        <View style={styles.container}>
           <Entypo name="menu" size={30} color="black"/>
           <Text style={styles.heading}> My Vendors</Text>
           <AntDesign name="plussquareo" size={30} color="#FF7F50"/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10
    },
    heading:{
        color:"black",
        fontSize:20,
        fontWeight:"700"
    }
})
