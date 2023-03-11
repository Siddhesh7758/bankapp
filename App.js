import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const users = ['MC', 'BC', 'DC', 'FC'];

  return (
    <View className='flex items-center'>


      {users.map(name => (
        <View className='flex flex-row my-auto items-center justify-around border-2 py-6 m-4 rounded-2xl w-[90%] mb-3'>

        <View className='m-[-8]'>
          <Image source={{uri: 'data:image/png;base64,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'}}
              className='w-20 h-20' />
        </View>

        <View className='ml-[-36] text-lg'>
            <Text className='text-lg'>{ name }</Text>
          <Text>email id</Text>
        </View>

        <View className=''>
          <TouchableOpacity className='bg-green-600 p-3 w-16 rounded'>
            <Text className='uppercase text-center'>click</Text>
          </TouchableOpacity>
        </View>

        </View>
      ))}
      

      
    </View>
  );
}