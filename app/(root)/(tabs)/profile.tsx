import React from "react";
import {Alert, Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import icons from "@/constants/icons";
import images from "@/constants/images";
import {settings} from "@/constants/data";
import {useGlobalContext} from "@/lib/global-provider";

/**
 * Reusable settings item
 */
interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
}

const SettingsItem = ({
                          icon,
                          title,
                          onPress,
                          textStyle,
                          showArrow = true,
                      }: SettingsItemProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row items-center justify-between py-3"
            activeOpacity={0.7}
        >
            <View className="flex-row items-center gap-3">
                <Image source={icon} className="size-6"/>
                <Text
                    className={`text-lg font-rubik-medium text-black-300 ${
                        textStyle ?? ""
                    }`}
                >
                    {title}
                </Text>
            </View>

            {showArrow && (
                <Image source={icons.rightArrow} className="size-5"/>
            )}
        </TouchableOpacity>
    );
};

const Profile = () => {
    const {refetch} = useGlobalContext();
    /**
     * Replace this with your real auth logout
     * (Clerk, Supabase, Firebase, etc.)
     */
    const logout = async () => {
        return true;
    };

    const handleLogout = async () => {
        try {
            const result = await logout();
            if (result) {
                Alert.alert("Success", "Logged out successfully");
                refetch()
            } else {
                Alert.alert("Error", "Failed to logout");
            }
        } catch (error) {
            Alert.alert("Error", "Something went wrong");
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                {/* Header */}
                <View className="flex-row justify-between items-center mt-5">
                    <Text className="text-xl font-rubik-bold">Profile</Text>
                    <Image source={icons.bell} className="size-5"/>
                </View>

                {/* Avatar */}
                <View className="items-center mt-8">
                    <View className="relative">
                        <Image
                            source={images.avatar}
                            className="size-44 rounded-full"
                        />
                        <TouchableOpacity className="absolute bottom-2 right-2">
                            <Image source={icons.edit} className="size-9"/>
                        </TouchableOpacity>
                    </View>

                    <Text className="text-2xl font-rubik-bold mt-3">
                        MAYOR.LA.LA
                    </Text>
                </View>

                {/* Quick actions */}
                <View className="mt-10">
                    <SettingsItem icon={icons.calendar} title="My Bookings"/>
                    <SettingsItem icon={icons.wallet} title="Payments"/>
                </View>

                {/* Settings list */}
                <View className="mt-6 border-t border-primary-200 pt-5">
                    {settings.slice(2).map((item, index) => (
                        <SettingsItem key={index} {...item} />
                    ))}
                </View>

                {/* Logout */}
                <View className="mt-6">
                    <SettingsItem
                        icon={icons.logout}
                        title="Logout"
                        textStyle="text-danger"
                        showArrow={false}
                        onPress={handleLogout}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
