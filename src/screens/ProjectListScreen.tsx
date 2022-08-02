import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import {TaskContainer, TimeContainer, HorizontalDate} from '../components'


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