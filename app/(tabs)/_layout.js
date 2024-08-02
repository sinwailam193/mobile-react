import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import cn from "classnames";

import { icons } from "../../constants";
import { PRIMARY_COLOR } from "../../utils/constant";

const TABS = {
    home: {
        name: "home",
        title: "Home",
        icon: icons.home,
    },
    bookmark: {
        name: "bookmark",
        title: "Bookmark",
        icon: icons.bookmark,
    },
    create: {
        name: "create",
        title: "Create",
        icon: icons.plus,
    },
    profile: {
        name: "profile",
        title: "Profile",
        icon: icons.profile,
    },
};

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={cn("text-xs", {
                    "font-psemibold": focused,
                    "font-pregular": !focused,
                })}
                style={{ color }}
            >
                {name}
            </Text>
        </View>
    );
};

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFA001",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: PRIMARY_COLOR,
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        paddingTop: 10,
                    },
                }}
            >
                {Object.keys(TABS).map((key) => (
                    <Tabs.Screen
                        key={TABS[key].name}
                        name={TABS[key].name}
                        options={{
                            title: TABS[key].title,
                            headerShown: false,
                            tabBarIcon: ({ color, focused }) => (
                                <TabIcon
                                    icon={TABS[key].icon}
                                    color={color}
                                    name={TABS[key].title}
                                    focused={focused}
                                />
                            ),
                        }}
                    />
                ))}
            </Tabs>
        </>
    );
}
