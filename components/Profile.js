import React from 'react'
import profile from '../image/profile.jpg'
import {
    Image,
    Center

} from 'native-base';
export default function Profile() {
    return <Center mt="2">
        <Image source={profile} alt="Alternate Text" size="60" borderRadius="full" />
    </Center>;

}
