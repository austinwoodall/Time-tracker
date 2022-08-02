import React from 'react'
import {View, Text} from 'react-native'
import {useTailwind} from 'tailwind-rn';
import { MaterialCommunityIcons,MaterialIcons  } from '@expo/vector-icons';

interface Props {}

const TaskListHeader = () => {
    const tailwind = useTailwind();
    return(
        <View style={tailwind('flex flex-row justify-between w-full h-20 pt-5 px-1 bg-white items-center')}>
            <View>
                <MaterialIcons name="arrow-back" size={32} color="black" />
            </View>
            <View>
                <Text style={tailwind('text-2xl')}>TimeTracker</Text>
            </View>
            <View>
                <MaterialCommunityIcons name="plus-circle-outline" size={32} color="black" />
            </View>
        </View>
    )
}

export default TaskListHeader