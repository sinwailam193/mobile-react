import { useState } from "react";
import { ScrollView, View, Text, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import { images } from "../../constants";
import { FormField, CustomButton } from "../../components";
import { createUser } from "../../lib/appwrite";

export default function SignUp() {
    const [formField, setFormField] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [submitLoading, setSubmitLoading] = useState(false);

    async function handlePress() {
        const { username, email, password } = formField;

        if (!username || !email || !password) {
            Alert.alert("Error", "Please fill in all the fields.");
            return;
        }

        setSubmitLoading(true);

        try {
            const res = await createUser(email, password, username);

            // set it to global state

            router.replace("/home");
        } catch (err) {
            Alert.alert("Error", err.message);
        } finally {
            setSubmitLoading(false);
        }
    }

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
                        Sign up to Aora
                    </Text>

                    <FormField
                        title="Username"
                        otherStyles="mt-10"
                        value={formField.username}
                        onChangeText={(event) =>
                            setFormField({
                                ...formField,
                                username: event,
                            })
                        }
                    />
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
                        title="Sign up"
                        containerStyle="mt-7"
                        onPress={handlePress}
                        isLoading={submitLoading}
                    />

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Have an account already?
                        </Text>
                        <Link
                            href="/sign-in"
                            className="text-lg font-psemibold text-secondary"
                        >
                            Sign in
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
