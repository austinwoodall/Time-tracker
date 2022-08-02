import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { MaterialIcons  } from '@expo/vector-icons'; 

//duration is in seconds
interface Props {
    task:string;
    duration?:number;
    description?:string;
    note?:string;
}

const reformatNumber=(num:number):string=>{
    return Math.trunc(num/10)>0?num.toString():'0'+num.toString()
}

//Task card
export default function TaskCard({task,duration=0,description='',note=''}:Props){
    const tailwind = useTailwind();
    const day=Math.trunc((duration/86400)%60).toString();
    const hr=reformatNumber(Math.trunc((duration/3600)%60));
    const min=reformatNumber(Math.trunc((duration/60)%60));
    const sec=reformatNumber(Math.trunc((duration)%60));

    const [viewNotes, setViewNotes]=useState(false);
    const handleViewNotes=()=>{
        setViewNotes(!viewNotes)
    }

    return(
        <View style={tailwind('bg-white w-full rounded-md border-black border-2 p-2')}>
            <View style={tailwind('bg-white flex-row justify-between')}>
                <View style={tailwind('bg-white flex w-1/2')}>
                    <Text style={tailwind('text-black')}>{task} </Text>
                    <Text style={tailwind('text-gray-300')}>{description} </Text>
                </View>
                <View style={tailwind('bg-white')}>
                    <MaterialIcons style={tailwind('ml-auto')} name="play-circle-filled" size={28} color="black" />
                    <Text style={tailwind('text-gray-300')}>{day}:{hr}:{min}:{sec} </Text>
                </View>
            </View>
            <View style={tailwind('border-t border-gray-200')}>
                <View style={tailwind('flex flex-row')}>
                    
                    {
                        note.length>0 && 
                        (
                            viewNotes
                            ?<><Text>Notes</Text><MaterialIcons onPress={handleViewNotes} name="keyboard-arrow-up" size={20} color="gray" /></>
                            :<><Text>Notes</Text><MaterialIcons onPress={handleViewNotes} name="keyboard-arrow-down" size={20} color="gray" /></>
                        )
                    }
                </View>
                {
                    note.length>0 && viewNotes && <Text>{note}</Text>
                }
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

