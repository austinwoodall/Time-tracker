import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import TaskContainer from "../components/TaskContainer";
import TimeContainer from "../components/TimeContainer";
import HorizontalDate from "../components/HorizontalDate";

const ProjectListScreen = () => {
    const tailwind = useTailwind();

    return (
        <View style={[tailwind('flex h-full items-center justify-start bg-blue-200')]}>
            <HorizontalDate/>
            <TimeContainer initialTime={0}/>
            <TaskContainer/>
        </View>
    )
}

export default ProjectListScreen;