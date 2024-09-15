import { useState } from "react";
import { FlatList, Text, View, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { useAppwrite } from "../../lib/hooks";
import { SearchInput, Trending, EmptyState, VideoCard } from "../../components";

export default function Home() {
    const [refreshing, setRefreshing] = useState(false);
    const { posts: allPosts, refetch: allPostRefetch } =
        useAppwrite(getAllPosts);
    const { posts: latestPosts, refetch: latestPostRefetch } =
        useAppwrite(getLatestPosts);

    async function handleRefresh() {
        // refresh gets called when user pulls down
        setRefreshing(true);
        // re call videos
        await allPostRefetch();
        setRefreshing(false);
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={allPosts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <VideoCard video={item} />}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome back
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    JS Mastery
                                </Text>
                            </View>

                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-9 h-10"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        <SearchInput />
                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-100 text-lg font-pregular mb-3">
                                Latest videos
                            </Text>

                            <Trending posts={latestPosts ?? []} />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No videos found"
                        subtitle="No videos created yet"
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
}
