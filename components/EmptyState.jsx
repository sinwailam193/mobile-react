import { View, Text, Image } from "react-native";
import { router } from "expo-router";

import { images } from "../constants";
import CustomButton from "./CustomButton";

export default function EmptyState({ title, subtitle }) {
    return (
        <View className="justify-center items-center px-4">
            <Image
                source={images.empty}
                className="w-[270px] h-[215px]"
                resizeMode="contain"
            />
            <Text className="text-xl text-center font-psemibold text-white mt-2">
                {title}
            </Text>
            <Text className="font-pmedium text-sm text-gray-100">
                {subtitle}
            </Text>

            <CustomButton
                title="Create video"
                onPress={() => router.push("/create")}
                containerStyle="w-full my-5"
            />
        </View>
    );
}
