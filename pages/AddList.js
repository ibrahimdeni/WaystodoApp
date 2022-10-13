import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Select,
  Box,
  TextArea
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";
import { API, setAuthToken } from "../config/api";

export default function AddList() {
  const [dataList, setDataList] = useState({
    name: "",
    description:"",
    date:"",
    category:"",
  });
  function handleChangeText(name, value) {
    setDataList({
      ...dataList,
      [name]: value,
    });
    console.log("ini cate",dataList);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await API.post("/list", dataList, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigation.navigate("listtodo");
    } catch (err) {
      console.log("gagal");
    }
  }
  
  const [list, setList] = useState([]);
  
  const getList = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await API.get("/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("ini", list);
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} alignItems="" w="100%">
          <HStack alignItems="start" mt="5">
            <Text fontSize="3xl" bold my="5">
              Add List
            </Text>
          </HStack>
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Name"
              bold
              bg="muted.200"
              size="md"
              onChangeText={(value) => handleChangeText("name", value)}
            />
          </FormControl>
          <FormControl w="100%" bg="muted.200" name="category" onChangeText={(value) => handleChangeText("category", value)}>
            <Select minWidth="200" placeholder="Category" mt="1">
              <Select.Item label="Full Stack" value="Full Stack" />
              <Select.Item label="Web Development" value="Web Development" />
              <Select.Item label="UX Research" value="UX Research" />
              <Select.Item label="Backend Development" value="Backend Development" />
            </Select>
          </FormControl>
          <FormControl my="3">
            <Input
              type="date"
              placeholder="Date"
              bold
              bg="muted.200"
              size="md"
              onChangeText={(value) => handleChangeText("date", value)}
            />
          </FormControl>
          <FormControl >
            <TextArea
              h="110"
              placeholder="Description"
              w="100%"
              bg="muted.200"
              onChangeText={(value) => handleChangeText("description", value)}
              />
          </FormControl>
          <Button variant="danger" bg="error.600" w="100%" mt="10" onPress={(e) => handleSubmit(e)}>
            <Text bold color="white">
              Add List
            </Text>
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
    </>
  );
}
