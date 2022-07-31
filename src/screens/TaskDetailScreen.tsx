import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const TaskDetailScreen = () => {
    const tailwind = useTailwind();

    return (
        <View style={[tailwind('flex h-full items-center justify-center bg-blue-200')]}>
            <Text>Task Details Screen</Text>
        </View>
    )
}

export default TaskDetailScreen;