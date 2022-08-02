import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import {TaskContainer, TimeContainer, HorizontalDate, TaskSelection, TaskListHeader, TimeContainerStatic} from '../components'


const ProjectListScreen = () => {
    const tailwind = useTailwind();
    return (
        <View style={[tailwind('flex h-full items-center justify-start bg-blue-200')]}>
            {/* <TaskListHeader/>
            <HorizontalDate/>
            <TimeContainer initialTime={0}/>
            <TaskContainer/> */}

            <TaskListHeader/>
            <TimeContainerStatic initialTime={295100}/>
            <TaskSelection/>
        </View>
    )
}

export default ProjectListScreen;