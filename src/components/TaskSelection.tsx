import React, {useState} from 'react'
import {View, Text, FlatList} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import { MaterialCommunityIcons,Ionicons  } from '@expo/vector-icons';

const taskNameArr=[
    {task:'Clean the lawn',id:'t-1'},
    {task:'Paint the garage door',id:'t-2'},
    {task:'Sweep the porch',id:'t-3'},
]

interface ITaskName {
    taskName:string;
    selected:string;
    id:string;
    handleSetSelected(str:string):void;
}
const RadioTask=({taskName,selected, id, handleSetSelected}:ITaskName)=>{
    const tailwind = useTailwind();
    const [selection, setSelection]=useState(false)

    const handlePress=()=>{
        setSelection(!selection);
        id===selected?handleSetSelected(''):handleSetSelected(id);
    }
    return(
        <View style={tailwind(`flex flex-row w-3/4 my-1 mx-auto bg-green-100`)}>
            {
            id===selected?
            <MaterialCommunityIcons onPress={handlePress} name="radiobox-marked" size={24} color="black" />
            :<MaterialCommunityIcons onPress={handlePress} name="radiobox-blank" size={24} color="black" />
            }
            <Text>{taskName}</Text>   
        </View>
    )
}

const TaskSelection = () => {
    const tailwind = useTailwind();
    const [selected, setSelected]=useState('')
    const handleSetSelected=(str:string)=>{
        setSelected(str)
    }
    return(
    <View style={tailwind(`h-1/2 w-3/4 bg-white rounded-2xl -mt-3`)}>
        <View style={tailwind(`flex flex-row justify-center rounded-2xl h-10 bg-red-100`)}>
            <MaterialCommunityIcons  style={tailwind(`my-auto`)} name="plus-circle-outline" size={28} color="black" />
            <Text style={tailwind(`text-xl my-auto`)}>Add New Task</Text>
        </View>
        <FlatList
            data={taskNameArr} 
            renderItem={itemData=><RadioTask taskName={itemData.item.task} id={itemData.item.id} selected={selected} handleSetSelected={handleSetSelected} />}
            keyExtractor={(item,index)=> item.id}
        />
        <View style={tailwind(`px-3 h-10 bg-red-100 mx-auto rounded-2xl -mb-5`)}>
            {
                selected!==''?
                <Ionicons style={tailwind(`bg-green-100 mx-auto my-auto`)} name="ios-arrow-down-outline" size={24} color="black" />
                :
                <Text style={tailwind(`w-full bg-green-100 text-center my-auto`)}>SAVE</Text>  
            }
             
        </View>
    </View>
    )
}

export default TaskSelection