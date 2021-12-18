import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
function MyTabs(){
  return(
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#FF7F50',
    }}>
    <Tab.Screen name="Vendors" options={{
      tabBarIcon:()=>(
    <MaterialCommunityIcons name="heart-multiple-outline" size={30} color="#FF7F50" />
      )
    
    }}  component={Home} />
    <Tab.Screen name="Showroom" options={{
      tabBarIcon:()=>(
        <AntDesign name="home" size={30} color="black" />
      )
    }} component={Home} />
  </Tab.Navigator>
  )
}
const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
       <NavigationContainer>
         <MyTabs />
       </NavigationContainer>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
