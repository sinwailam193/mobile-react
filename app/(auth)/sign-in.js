import { useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../../constants";
import { FormField, CustomButton } from "../../components";

export default function SignIn() {
    const [formField, setFormField] = useState({
        email: "",
        password: "",
    });
    const [submitLoading, setSubmitLoading] = useState(false);

    function handlePress() {}

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px]"
                    />

                    <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
                        Log in to Aora
                    </Text>

                    <FormField
                        title="Email"
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        value={formField.email}
                        onChangeText={(event) =>
                            setFormField({
                                ...formField,
                                email: event,
                            })
                        }
                    />
                    <FormField
                        title="Password"
                        otherStyles="mt-7"
                        value={formField.password}
                        onChangeText={(event) =>
                            setFormField({
                                ...formField,
                                password: event,
                            })
                        }
                    />

                    <CustomButton
                        title="Sign in"
                        containerStyle="mt-7"
                        onPress={handlePress}
                        isLoading={submitLoading}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Sign up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
