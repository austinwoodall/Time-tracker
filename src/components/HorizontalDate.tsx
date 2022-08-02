import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {sub, add, format} from 'date-fns';

interface DateCardProps {
    day:Date;
}

function DateCard({day}:DateCardProps){
    const tailwind = useTailwind();
    const daysOfWeek=['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const dayIndex=typeof format(day,'i')==="string"?parseInt(format(day,'i'))-1: -999;

    return(
        <View style={tailwind('bg-white w-16 mx-1 rounded-md border-black border-2')}>
            <View style={tailwind('bg-gray-400 w-full h-2')}></View>
            <Text style={tailwind('text-center')}>{typeof dayIndex==="number" && daysOfWeek[dayIndex]}</Text>
            <Text style={tailwind('text-center pb-2')}>{day.getDate()}</Text>
        </View>
    )
}

export default function HorizontalDate(){
    const tailwind = useTailwind();
    const today=new Date();
    const weekDays=[
        {day: sub(today, {days:7}),id:'1'},
        {day: sub(today, {days:6}),id:'2'},
        {day: sub(today, {days:5}),id:'3'},
        {day: sub(today, {days:4}),id:'4'},
        {day: sub(today, {days:3}),id:'5'},
        {day: sub(today, {days:2}),id:'6'},
        {day: sub(today, {days:1}),id:'7'},
        {day: today,id:'8'},
        {day: add(today, {days:1}),id:'9'},
        {day: add(today, {days:2}),id:'10'},
        {day: add(today, {days:3}),id:'11'},
        {day: add(today, {days:4}),id:'12'},
        {day: add(today, {days:5}),id:'13'},
        {day: add(today, {days:6}),id:'14'},
        {day: add(today, {days:7}),id:'15'},
    ]
    return(
        <View style={tailwind('bg-white w-full rounded-md border-black border-2 py-2 flex flex-row justify-center')}>
            <FlatList 
                horizontal
                data={weekDays} 
                renderItem={itemData=><DateCard day={itemData.item.day} />}
                keyExtractor={(item,index)=> item.id}
            />
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
  

