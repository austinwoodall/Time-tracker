import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { MaterialIcons  } from '@expo/vector-icons'; 

//not used yet
interface Props {
    task:string;
    subtitle:string;
    notes:string;
    timeValueMin:number;
    timeValueHour:number;
}

//Task card
export default function TaskCard(){
    const tailwind = useTailwind();
    return(
        <View style={tailwind('bg-white mx-5 rounded-md border-black border-2 p-2')}>
            <View style={tailwind('bg-white flex-row justify-between')}>
                <View style={tailwind('bg-white')}>
                    <Text style={tailwind('text-black')}>Task Title </Text>
                    <Text style={tailwind('text-gray-300')}>Subtitle </Text>
                </View>
                <View style={tailwind('bg-white')}>
                    <MaterialIcons name="play-circle-filled" size={24} color="black" />
                    <Text style={tailwind('text-gray-300')}>00:00 </Text>
                </View>
            </View>
            <View style={tailwind('border-t border-gray-200')}>
                <Text>Notes</Text>
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
  

