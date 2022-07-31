import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const TaskListScreen = () => {
    const tailwind = useTailwind();

    return (
        <View style={[tailwind('flex h-full items-center justify-center bg-blue-200')]}>
            <Text>Task List Screen</Text>
        </View>
    )
}

export default TaskListScreen;