import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { PRIMARY_COLOR } from "../../utils/constant";

export default function AuthLayout() {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>

            <StatusBar backgroundColor={PRIMARY_COLOR} style="light" />
        </>
    );
}
