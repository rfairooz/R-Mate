import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import React from 'react';

const general = [
  {
    navigation: 'Account',
    text: 'Account',
    icon: <MaterialIcons name="person-outline" size={24} color="black" />,
  },
  {
    navigation: 'Notification',
    text: 'Notification',
    icon: <MaterialCommunityIcons name="bell-outline" size={24} color="black" />,
  },
  {
    navigation: 'LoginScreen',
    text: 'Click to Logout',
    icon: <MaterialIcons name="logout" size={24} color="black" />,
  },
];

const feedback = [
  {
    navigation: 'Bug',
    text: 'Bug',
    icon: <Entypo name="bug" size={24} color="black" />,
  },
  {
    navigation: 'Feedback',
    text: 'Feedback',
    icon: <Entypo name="paper-plane" size={24} color="black" />,
  },
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex justify-center items-center">
      <View className="bg-rmate-blue w-full h-[35vh] p-3">
        <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex items-center justify-center h-5/6">
          <Image
            source={require('../../assets/profilePIC.svg')}
            className="w-24 h-24 border-1 border-white rounded-full"
          />
          <Text
            className="text-rmate-white text-3xl font-semibold my-4"
            style={{ fontFamily: 'Poppins_400Regular' }}
          >
            Ashley Kim
          </Text>
        </View>
      </View>
      <View className="w-11/12 mt-4">
        <Text
          className="bg-rmate-yellow rounded-full px-4 py-2 w-fit text-black font-semibold"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          General
        </Text>
        {general.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.navigation)}
            className="my-3"
          >
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                {item.icon}
                <Text className="mx-2" style={{ fontFamily: 'Poppins_400Regular' }}>
                  {item.text}
                </Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ))}
        <Text
          className="bg-rmate-yellow rounded-full px-4 py-2 w-fit text-black font-semibold mt-4"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          Feedback
        </Text>
        {feedback.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.navigation)}
            className="my-3"
          >
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                {item.icon}
                <Text className="mx-2" style={{ fontFamily: 'Poppins_400Regular' }}>
                  {item.text}
                </Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Profile;