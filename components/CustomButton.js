import { TouchableOpacity, Text } from "react-native";
import cn from "classnames";

export default function Button({
    title,
    containerStyle,
    onPress,
    textStyles,
    isLoading,
}) {
    return (
        <TouchableOpacity
            className={cn(
                "bg-secondary rounded-xl min-h-[62px] justify-center items-center",
                {
                    "opacity-50": isLoading,
                    [containerStyle]: !!containerStyle,
                }
            )}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Text
                className={cn("text-primary font-psemibold text-lg", {
                    [textStyles]: !!textStyles,
                })}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
