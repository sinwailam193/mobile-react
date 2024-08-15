import { View, Text, FlatList } from "react-native";

export default function Trending({ posts }) {
    return <FlatList data={posts} keyExtractor={(item) => item.$id} />;
}
