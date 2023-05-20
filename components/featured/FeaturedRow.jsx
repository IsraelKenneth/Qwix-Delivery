import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View className="mt-4 flex-row items-start justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon size={20} color="#00ccbb" />
            </View>
            <Text className="x-s text-gray-500 px-4">{description}</Text>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} showsHorizontalScrollIndicator={false}>

                <RestaurantCards id={123} imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" title="Yo, Sushi" rating={4.5} genre="Japanese" address="ireland" short_description="food ready" dishes="yes" long={10.5} lat={3.2} />
                <RestaurantCards id={123} imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" title="Yo, Sushi" rating={4.5} genre="Japanese" address="ireland" short_description="food ready" dishes="yes" long={10.5} lat={3.2} />
                <RestaurantCards id={123} imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" title="Yo, Sushi" rating={4.5} genre="Japanese" address="ireland" short_description="food ready" dishes="yes" long={10.5} lat={3.2} />
                <RestaurantCards id={123} imgUrl="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872" title="Yo, Sushi" rating={4.5} genre="Japanese" address="ireland" short_description="food ready" dishes="yes" long={10.5} lat={3.2} />


            </ScrollView>
        </View>
    )
}

export default FeaturedRow