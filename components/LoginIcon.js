import React from 'react'
import icon from '../image/Login Icon.png'

import {
  Image,
  Center

} from 'native-base';

export default function LoginIcon() {
  return <Center mt="2">
    <Image source={icon} alt="Alternate Text" size="180" />
  </Center>;
}
