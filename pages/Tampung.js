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

const getCategory = async () => {
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
}, [list]);
