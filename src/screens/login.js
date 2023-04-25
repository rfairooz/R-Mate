import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex flex-col justify-center items-center">
      <Text>LoginScreen</Text>
      <TouchableOpacity
        className="flex flex-col mr-3"
        onPress={() => navigation.navigate('BottomNavigator')}
      >
        <View className="bg-red-400">
          <Text className="">Click to Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex flex-col mr-3"
        onPress={() => navigation.navigate('LoadingScreen')}
      >
        <View className="bg-blue-400">
          <Text className="">Click to Loading Screen</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
