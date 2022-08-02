
  import React, {useState, useEffect, useRef} from 'react'
  import { StyleSheet, Text, View, Pressable,FlatList } from 'react-native';
  import {useTailwind} from 'tailwind-rn';
  import { MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons'; 
  import TaskCard from './TaskCard';
  import {format} from 'date-fns';
  
  const taskList: {task:string;duration?:number;description?:string; note?:string, id:number}[]=[
    {
        task:'rewrite backend',
        duration:25612,
        description:'details',
        note:'not very important',
        id:1,
    },
    {
        task:'edit photos',
        duration:235612,
        description:'details',
        id:2,
    },
    {
        task:'SEO',
        duration:5612,
        description:'details',
        note:'not very important',
        id:3,
    },
    {
        task:'expo visit',
        duration:612,
        description:'details',
        note:'not very important',
        id:3,
    },
    {
        task:'graphql bug',
        duration:335612,
        description:'details',
        note:'not very important',
        id:4,
    },
    {
        task:'setup deploy configuration',
        duration:232,
        description:'details',
        note:'not very important',
        id:5,
    },
  ]

  export default function TaskContainer(){
      const tailwind = useTailwind();
      const today=format(new Date(),"eeee ',' dd MMM yyyy 'Today'")
      return(
        <View style={[tailwind('justify-center w-full bg-white'), styles.container]}>
            <Text>{today}</Text>
            <FlatList 
                data={taskList} 
                renderItem={itemData=><TaskCard 
                                            task={itemData.item.task} 
                                            duration={itemData.item.duration}
                                            description={itemData.item.description}
                                            note={itemData.item.note}
                                        />}
                keyExtractor={(item,index)=> {
                    return (typeof item.id==="number")?item.id.toString():item.id;
                }}
            />
        </View>
      )
  }

  const styles = StyleSheet.create({
    container: {
      height: '60%',
    },
  });
  

