import React from "react";
import {
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Avatar,
  Flex,
  Heading,
  FormControl,
  Input,
  Select,
  CheckCircleIcon,
  CircleIcon,
  Image,
  ScrollView,
} from "native-base";
import { Fontisto } from "@expo/vector-icons";
import download from "../image/download.png";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo({ navigation }) {
  return (
    <>
      <ScrollView>
        <Box m={5}>
          <HStack
            space={48}
            mb="8"
            w="90%"
            alignItems="center"
            justifyContent="center"
          >
            <VStack ml={5}>
              <Text fontSize="xl" bold>
                Hi Ibrahim
              </Text>
              <Text color="error.400">777 Lists</Text>
            </VStack>
            <Flex Flex direction="row-reverse">
              <Image
                source={download}
                alt="Alternate Text"
                size="60"
                borderRadius="full"
              />
            </Flex>
          </HStack>
          <FormControl bg="#e5e5e5" borderColor="#737373" mb="2">
            <Input
              placeholder="Search List Here!"
              size="lg"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            />
          </FormControl>
          <HStack mb="8">
            <FormControl
              bg="#e5e5e5"
              w="38%"
              borderColor="#737373"
              borderWidth="1"
              borderRadius="5px"
            >
              <HStack mx="2">
                <Box mt="3">
                  <Fontisto name="date" color="#a3a3a3" size="12" />
                </Box>
                <Input placeholder="Choose Date" size="lg" />
              </HStack>
            </FormControl>
            <FormControl bg="#e5e5e5" w="30%" mx="2" borderRadius="5px">
              <Select
                placeholder="Category"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Full Stack" value="full" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item
                  label="Web Development"
                  value="web"
                  borderColor="#737373"
                  borderWidth="1"
                />
              </Select>
            </FormControl>
            <FormControl bg="#e5e5e5" w="28%" borderRadius="5px">
              <Select
                placeholder="Status"
                size="lg"
                borderColor="#737373"
                borderWidth="1"
              >
                <Select.Item label="Finished" value="done" />
                <Select.Item label="Not Finished" value="notDone" />
              </Select>
            </FormControl>
          </HStack>
          <Box>
            <VStack bg="blueGray.400" py="2" px="4" mb="4">
              <HStack space={32}>
                <Text
                  bold
                  fontSize="12pt"
                  onPress={() => navigation.navigate("detail")}
                >
                  Study-Golang-programing
                </Text>
                <Button bg="amber.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="e63946" pr="8">
                  <Text mb="6" color="dark.900">
                    Learn Golang to improve
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="white" size="12" mt="3" />
                    <Text color="white" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>
                <CheckCircleIcon
                  color="green.500"
                  size="30"
                  //   pl="1"
                ></CheckCircleIcon>
              </HStack>
            </VStack>

            <VStack bg="blue.400" py="2" px="4" mb="4">
              <>
                <HStack space={32}>
                  <Text
                    bold
                    fontSize="12pt"
                    onPress={() => navigation.navigate("detail")}
                  >
                    Study-Golang-programing
                  </Text>
                  <Button bg="amber.400" px="2" py="0" h="22px">
                    Study
                  </Button>
                </HStack>
                <HStack space={16}>
                  <VStack color="e63946" pr="8">
                    <Text mb="6" color="dark.900">
                      Learn Golang to improve
                    </Text>
                    <HStack>
                      <Fontisto name="date" color="white" size="12" mt="3" />
                      <Text color="white" fontSize="8pt">
                        {" "}
                        19 July 2022
                      </Text>
                    </HStack>
                  </VStack>
                  <CheckCircleIcon
                    color="green.500"
                    size="30"
                    //   pl="1"
                  ></CheckCircleIcon>
                </HStack>
              </>
            </VStack>

            <VStack bg="red.100" py="2" px="4" mb="10">
              <HStack space={32}>
                <Text
                  bold
                  fontSize="12pt"
                  onPress={() => navigation.navigate("detail")}
                >
                  Study-Golang-programing
                </Text>
                <Button bg="blue.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="#a3a3a3" pr="8">
                  <Text mb="6" color="#a3a3a3">
                    Learn Golang to improve
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                    <Text color="white" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>
                <CircleIcon
                  color="#d4d4d4"
                  size="30"
                  //   pl="1"
                ></CircleIcon>
              </HStack>
            </VStack>

            <VStack bg="danger.700" py="2" px="4" mb="10">
              <HStack space={32}>
                <Text
                  bold
                  fontSize="12pt"
                  onPress={() => navigation.navigate("detail")}
                >
                  Study-Golang-programing
                </Text>
                <Button bg="blue.400" px="2" py="0" h="22px">
                  Study
                </Button>
              </HStack>
              <HStack space={16}>
                <VStack color="#a3a3a3" pr="8">
                  <Text mb="6" color="#a3a3a3">
                    Learn Golang to improve
                  </Text>
                  <HStack>
                    <Fontisto name="date" color="#a3a3a3" size="12" mt="3" />
                    <Text color="white" fontSize="8pt">
                      {" "}
                      19 July 2022
                    </Text>
                  </HStack>
                </VStack>
                <CircleIcon
                  color="#d4d4d4"
                  size="30"
                  //   pl="1"
                ></CircleIcon>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
}
