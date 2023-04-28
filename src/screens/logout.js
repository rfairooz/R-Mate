import React from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView className="bg-rmate-lightblue w-[100%] h-[100%]"></SafeAreaView>;
};

export default LogoutScreen;
