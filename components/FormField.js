import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import cn from "classnames";

import { icons } from "../constants";

export default function FormField({
    title,
    value,
    otherStyles,
    placeholder,
    keyboardType,
    onChangeText,
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={cn("space-y-2", { [otherStyles]: !!otherStyles })}>
            <Text className="text-base text-gray-100 font-pmedium">
                {title}
            </Text>

            <View className="w-full border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={onChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />

                {title === "Password" && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            className="w-6 h-6"
                            resizeMode="contain"
                            source={!showPassword ? icons.eye : icons.eyeHide}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
