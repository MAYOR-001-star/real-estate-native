import {FlatList, Image, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View className="px-5">
                    <View className="flex flex-row items-center justify-between mt-5">
                        <View className="flex flex-row items-center">
                            <Image
                                source={images.avatar}
                                className="size-12 rounded-full"
                            />
                            <View className="ml-2">
                                <Text className="text-xs font-rubik text-black-100">
                                    Good Morning,
                                </Text>
                                <Text className="text-base font-rubik-medium text-black-300">
                                    Mayor
                                </Text>
                            </View>
                        </View>
                        <Image source={icons.bell} className="size-6"/>
                    </View>

                    <Search/>
                </View>

                {/* FEATURED SECTION */}
                <View className="mt-5">
                    <View className="px-5 flex flex-row items-center justify-between">
                        <Text className="text-xl font-rubik-bold text-black-300">
                            Featured
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-base font-rubik-bold text-primary-300">
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={[1, 2, 3]}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerClassName="px-5 mt-5 gap-5"
                        renderItem={() => <FeaturedCard/>}
                    />
                </View>

                {/* RECOMMENDATION SECTION */}
                <View className="px-5 mt-8">
                    <View className="flex flex-row items-center justify-between">
                        <Text className="text-xl font-rubik-bold text-black-300">
                            Our Recommendation
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-base font-rubik-bold text-primary-300">
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Filters/>
                </View>

                {/* GRID LIST */}
                <FlatList
                    data={[1, 2, 3, 4]}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    scrollEnabled={false}
                    contentContainerClassName="pb-32 mt-2"
                    columnWrapperClassName="flex gap-5 px-5"
                    renderItem={() => <Card/>}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
