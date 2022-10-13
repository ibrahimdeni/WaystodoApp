import React, { useState } from "react";
import {
    Text,
    HStack,
    Center,
    NativeBaseProvider,
    VStack,
    FormControl,

    Button,
    Input
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import Todo from "../components/Todo";
import { API, setAuthToken } from "../config/api";
import LoginIcon from "../components/LoginIcon";

export default function Login({ navigation }) {
    const [dataRegister, setDataRegister] = useState({
        email: "",
        password: "",
      });
      
      function handleChangeText(name, value) {
        console.log("punya", name, "isinya", value);
        setDataRegister({
          ...dataRegister,
          [name]: value,
        });
      }
      
      async function handleSubmit(e) {
          e.preventDefault()
          try {
          const response = await API.post("auth/login", dataRegister);
          AsyncStorage.setItem("token", response.data.token); 
             console.log(response.data)
             setAuthToken(response.data.token); 
             navigation.navigate("listtodo")
          }catch(err) {
              console.log(err)
          }
      }
  
    return (
        <NativeBaseProvider>
            <Center
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
                px={4}
                flex={1}
            >
                <VStack space={2} alignItems="">
                    <LoginIcon />
                    <HStack alignItems="start" mt="5">
                        <Text fontSize="3xl" bold>Login</Text>
                    </HStack>
                    <FormControl my="3">
                        <Input type="email"
                            placeholder="Email"
                            bold
                            bg="muted.200"
                            size="md"
                            onChangeText={(value) => handleChangeText("email", value)}
                        />
                    </FormControl>
                    <FormControl >

                        <Input type="password"
                            placeholder="password"
                            bold
                            bg="muted.200"
                            size="md"
                            onChangeText={(value) => handleChangeText("password", value)}
                        />
                    </FormControl>
                    <Button variant="danger" bg="error.600" w="100%" mt="10" onPress={handleSubmit}>
                        <Text bold color="white">Login</Text>
                    </Button>

                    <Center>
                        <Text>
                            New Users ?
                            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                                <Text color="error.600" bold>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </Text>
                    </Center>


                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}
