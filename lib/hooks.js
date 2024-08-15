import { useState, useEffect } from "react";
import { Alert } from "react-native";

export const useAppwrite = (fn) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setIsLoading(true);

        try {
            const response = await fn();

            setPosts(response);
        } catch (err) {
            Alert.alert("Error", err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function refetch() {
        await fetchData();
    }

    return {
        posts,
        isLoading,
        refetch,
    };
};
