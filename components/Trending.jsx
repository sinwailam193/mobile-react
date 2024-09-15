import { useState } from "react";
import { Video, ResizeMode } from "expo-av";
import clsx from "clsx";
import {
    TouchableOpacity,
    Text,
    FlatList,
    ImageBackground,
    Image,
} from "react-native";
import * as Animtable from "react-native-animatable";

import { icons } from "../constants";

const zoomIn = {
    0: {
        scale: 0.9,
    },
    1: {
        scale: 1.1,
    },
};

const zoomOut = {
    0: {
        scale: 1.1,
    },
    1: {
        scale: 0.9,
    },
};

function TrendingItem({ isActive, item }) {
    const [play, setPlay] = useState(false);

    return (
        <Animtable.View
            className="mr-5"
            animation={isActive ? zoomIn : zoomOut}
            duration={500}
        >
            {play ? (
                <Video
                    source={{ uri: item.video }}
                    className={clsx(
                        "w-52",
                        "h-72",
                        "rounded-[35px]",
                        "mt-3",
                        "bg-white/10"
                    )}
                    resizeMode={ResizeMode.CONTAIN}
                    useNativeControls
                    shouldPlay
                    onPlaybackStatusUpdate={(status) => {
                        if (status.didJustFinish) {
                            setPlay(false);
                        }
                    }}
                />
            ) : (
                <TouchableOpacity
                    className={clsx(
                        "relative",
                        "justify-center",
                        "items-center"
                    )}
                    activeOpacity={0.7}
                    onPress={() => setPlay(true)}
                >
                    <ImageBackground
                        className={clsx(
                            "w-52",
                            "h-72",
                            "rounded-[35px]",
                            "my-5",
                            "overflow-hidden",
                            "shadow-lg",
                            "shadow-black/40"
                        )}
                        resizeMode="cover"
                        source={{
                            uri: item.thumbnail,
                        }}
                    />
                    <Image
                        source={icons.play}
                        className={clsx("w-12", "h-12", "absolute")}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </Animtable.View>
    );
}

export default function Trending({ posts }) {
    const [activeItem, setActiveItem] = useState(posts[1]);

    function viewableItemsChanged({ viewableItems }) {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].item);
        }
    }

    return (
        <FlatList
            horizontal
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem
                    isActive={activeItem.$id === item.$id}
                    item={item}
                />
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 80,
            }}
            contentOffset={{ x: 140 }}
        />
    );
}
