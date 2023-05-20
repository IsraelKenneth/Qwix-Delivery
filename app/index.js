import { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, Image, TextInput } from "react-native"
import { Stack, useRouter } from 'expo-router'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { Categories, FeaturedRow } from '../components';

const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{

        headerShadowVisible: false,
        headerShown: false,
        // headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />),
        // headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />),
        headerTitle: ""
      }} />

      <View className='flex-row pb-3 items-center mx-4 space-x-2 px-2'>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>
        <UserIcon />
      </View>

      <View className='flex flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-lg'>
          <MagnifyingGlassIcon color='black' />
          <TextInput className='text-black' placeholder='Restaurant and Cuisines' placeholderTextColor="white" keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon />
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <FeaturedRow id='12' title='Featured' description='Paid placements from our partners' />
        <FeaturedRow id='123' title='Tasty Discounts' description="Everyone's been enjoying these juicy discounts" />
        <FeaturedRow id='124' title='Offers near you' description='Why not support your local restaurant tonight' />


      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;