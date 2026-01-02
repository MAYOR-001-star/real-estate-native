import {Image, ScrollView, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";

const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full" resizeMode="contain"/>
                <View className="px-10">
                    <Text className="text-base text-center font-rubik text-black">Welcome to ReState</Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer to {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>
                    <Text className="text-lg font-rubik trxt-black-200 text-center mt-12">
                        Login to ReState with Google
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
