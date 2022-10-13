import * as React from 'react';
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ListTodo from "../pages/ListTodo";
import AddList from '../pages/AddList';
import DetailList from '../pages/DetailList';
import AddCategory from '../pages/AddCategory'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Layardepan() {
  return (

    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="detail" component={DetailList} />
      <Stack.Screen name="listtodo" component={Tab1} options={{
        headerShown: false,
      }} />
    </Stack.Navigator>

  );
}
export default Layardepan;

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === "listtodo") {
            iconName = "calendar-alt"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "addlist") {
            iconName = "tasks"
            iconColor = focused ? "red" : "gray"
          } else if (route.name === "category") {
            iconName = "clipboard-list"
            iconColor = focused ? "red" : "gray"
          }

          return <FontAwesome5 name={iconName} size={24} color={iconColor} />
        },
        tabBarInactiveTintColor: "gray",
      })}
    >

      <Tab.Screen name="listtodo" component={ListTodo} options={{
        headerShown: false,
      }} />
      {/* <FontAwesome name="calendar" size={24} color="black" /> */}
      <Tab.Screen name="addlist" component={AddList} options={{
        headerShown: false,
      }} />
      <Tab.Screen name="category" component={AddCategory} options={{
        headerShown: false,
      }} />
    </Tab.Navigator>

  );
}