import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#333333"} />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems:"center",
    borderRadius:10,
  },
  textSearchBar: {
      color:"#858585",
      paddingLeft:10,
      fontSize:20
  },
});
