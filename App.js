import React from "react";
import Routes from "./Route/Routes";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

//! EXPORT PLACE
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}