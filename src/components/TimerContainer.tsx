import React, {useState, useEffect, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons  } from '@expo/vector-icons'; 

//Notes:
// - Need to update the styles to implement a clip path and transition
// - time variable made with useState is useless since it can't track time when app isn't open

//Still not sure how the clip-path will work out, might need this instead
//<MaterialCommunityIcons name="stop" size={60} color="black" />
//<MaterialCommunityIcons name="stop-circle" size={60} color="black" />


//not used yet
interface Props {

}


//Task card
export default function TimerContainer(){
    const tailwind = useTailwind();
  
    const [toggleTime, setToggleTime]=useState(false)
    const [time, setTime]=useState(0);
    const [timeStart, setTimeStart]=useState<Date|null>(null);
    const [timeEnd, setTimeEnd]=useState<Date|null>(null);
    const [duration, setDuration]=useState(0);

    const timeRef: { current: NodeJS.Timeout | null }=useRef(null);


    useEffect(()=>{
        setDuration(timeEnd!==null && timeStart!==null?Math.floor((timeEnd.getTime()-timeStart.getTime())/1000):0)
    },[timeEnd])

    const handleTimeToggleStart=()=>{
        setToggleTime(!toggleTime)
        setTimeStart(new Date())
        const id = setInterval(()=>{
            setTime(time=>time+1);
            setTimeEnd(new Date());  
        },1000)
        timeRef.current = id;
    }
    const handleTimeToggleEnd=()=>{
        setToggleTime(!toggleTime);
        setTimeStart(null);
        setTimeEnd(null);
        clearInterval(timeRef.current as NodeJS.Timeout)
        setTime(0);
    }


    return(
        <View style={tailwind('bg-green-600 mt-20 mx-auto w-3/4 rounded-sm border-black border-2 p-2 flex flex-row justify-center')}>
            <View style={tailwind('justify-center w-3/4')}>
                {toggleTime &&
                <>
                {/* <Text>Using a Ref:{time}</Text>
                <Text>Using Date():{timeEnd!==null && timeStart!==null?Math.floor((timeEnd.getTime()-timeStart.getTime())/1000):0}</Text>
                <Text>Duration:{duration}</Text> */}
                
                <View style={tailwind('flex-row justify-center')}>
                    <View style={tailwind('flex-row w-12')}>
                        <View style={tailwind('flex justify-between w-full')}>
                            <Text style={tailwind('text-2xl text-gray-300 text-center')}>{Math.trunc((duration/86400)%60)}</Text>
                            <Text style={tailwind('text-lg text-gray-300 text-center')}>Day</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row w-2')}>
                        <View style={tailwind('flex w-full')}>
                            <Text style={tailwind('text-2xl text-black text-center')}>:</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row w-12')}>
                        <View style={tailwind('flex justify-between w-full')}>
                            <Text style={tailwind('text-2xl text-gray-200 text-center')}>{Math.trunc((duration/3600)%60)}</Text>
                            <Text style={tailwind('text-lg text-gray-200 text-center')}>Hr</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row w-2')}>
                        <View style={tailwind('flex w-full')}>
                            <Text style={tailwind('text-2xl text-black text-center')}>:</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row w-12')}>
                        <View style={tailwind('flex justify-between w-full')}>
                            <Text style={tailwind('text-2xl text-black text-center')}>{Math.trunc((duration/60)%60)}</Text>
                            <Text style={tailwind('text-lg text-black text-center')}>Min</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex-row w-5')}>
                        <View style={tailwind('flex w-full')}>
                            <Text style={tailwind('text-sm text-black text-center')}>{Math.trunc((duration)%60)}</Text>
                        </View>
                    </View>
                </View>
                <View style={tailwind('flex-row justify-center')}>
                    <MaterialCommunityIcons onPress={handleTimeToggleEnd} name="stop-circle-outline" size={60} color="black" />
                </View>
                </>
                }

                {!toggleTime &&
                <View style={tailwind('flex-row justify-center')}>
                    <MaterialIcons onPress={handleTimeToggleStart} name="play-circle-filled" size={60} color="black" />
                </View>
                }
            </View>
        </View>
    )   
}

//I want to try and do a clippath to match the gif example
const styles = StyleSheet.create({
    clippath: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  