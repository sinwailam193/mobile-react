import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import cn from "classnames";

import { icons } from "../constants";

export default function SearchInput({
    title,
    value,
    otherStyles,
    placeholder,
    keyboardType,
    onChangeText,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className="w-full border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
            <TextInput
                className="text-base mt-0.5 text-white flex-1 font-pregular"
                value={value}
                placeholder="Search for a video topic"
                placeholderTextColor="#7b7b8b"
                onChangeText={onChangeText}
                secureTextEntry={title === "Password" && !showPassword}
            />

            <TouchableOpacity>
                <Image
                    source={icons.search}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
}
