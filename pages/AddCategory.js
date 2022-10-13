import React, { useState, useEffect } from "react";
import axios from "axios";
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
  ScrollView,
  TextArea
} from "native-base";

import { API, setAuthToken } from "../config/api";

export default function AddCategory({navigation}) {
  const [dataCategory, setDataCategory] = useState({
    name: "",
  });
  function handleChangeText(name, value) {
    setDataCategory({
      ...dataCategory,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await API.post("/category", dataCategory, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigation.navigate("category");
    } catch (err) {
      console.log("gagal");
    }
  }

  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await API.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, [categories]);

  return (
    <>
      <VStack space={1} mx="5" my="2">
        <Text fontSize="24" fontWeight="bold">
          Add Category
        </Text>

        {/* input category */}
        <FormControl my="5">
          <Input
            placeholder="Category"
            backgroundColor="gray.200"
            placeholderTextColor="black"
            size="md"
            onChangeText={(value) => handleChangeText("name", value)}
          />
        </FormControl>

        {/* tombol kategori */}
        <Button colorScheme="pink" onPress={handleSubmit}>
          <Text fontSize="20" fontWeight="bold" color="white">
            {" "}
            Add Category{" "}
          </Text>
        </Button>
      </VStack>

      {/* list category */}
      <Text fontSize="24" fontWeight="bold" mx="5" my="2">
        List Category
      </Text>
      <ScrollView>
        <VStack space={1} mx="5" my="1" maxW="xs">
          <HStack space={2} my="2" maxWidth="xs" flexWrap="wrap">
            {/* <Flex > */}
            {categories.map((item) => (
              <Box backgroundColor="blue.300" borderRadius={4} my="3">
                <Text mx="3" my="2" bold color="white">
                  {item.name}
                </Text>
              </Box>
            ))}
            {/* </Flex> */}
          </HStack>
        </VStack>
      </ScrollView>
      {/* <Footer /> */}
    </>
  );
};