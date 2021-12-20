import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import ChatHeader from "../components/ChatHeader";
import Contact from "../components/Contact";
import SearchBar from "../components/SearchBar";

const Home = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView >
        <View style={styles.Container}>
          {/* Header Section */}
          <ChatHeader />
          {/* SearchBar */}
          <SearchBar />
        </View>

        <View
          style={{
            borderBottomColor: "#E5E5E5",
            borderBottomWidth: 1,
          }}
        />
        <Contact />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFAFA",
    height: "20%",
    padding: 15,
  },
});
