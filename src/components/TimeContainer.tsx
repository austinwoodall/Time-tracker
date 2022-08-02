
  import React, {useState, useEffect, useRef} from 'react'
  import { StyleSheet, Text, View, Pressable } from 'react-native';
  import {useTailwind} from 'tailwind-rn';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { MaterialIcons  } from '@expo/vector-icons'; 
  
  
  //not used yet
  interface Props {
    initialTime?:number;
  }
  
  
  //Task card
  export default function TimeContainer({initialTime=0}:Props){
      const tailwind = useTailwind();

      const reformatNumber=(num:number):string=>{
        return Math.trunc(num/10)>0?num.toString():'0'+num.toString()
      }
    
      const [toggleTime, setToggleTime]=useState(false)
      const [timeStart, setTimeStart]=useState<Date|null>(null);
      const [timeEnd, setTimeEnd]=useState<Date|null>(null);
      const [duration, setDuration]=useState(initialTime);
  
      const timeRef: { current: NodeJS.Timeout | null }=useRef(null);
  
      useEffect(()=>{
        setDuration(
            timeEnd!==null && timeStart!==null
            ?Math.floor((timeEnd.getTime()-timeStart.getTime())/1000)+initialTime
            :initialTime
        )
      },[timeEnd])
  
      const handleTimeToggleStart=()=>{
          setToggleTime(!toggleTime)
          setTimeStart(new Date())
          const id = setInterval(()=>{
              setTimeEnd(new Date());  
          },1000)
          timeRef.current = id;
      }
      const handleTimeToggleEnd=()=>{
          setToggleTime(!toggleTime);
          setTimeStart(null);
          setTimeEnd(null);
          setDuration(initialTime)
          clearInterval(timeRef.current as NodeJS.Timeout)
      }
  
      return(

          <View style={tailwind('bg-white mx-auto w-full rounded-sm border-black border-2 p-2 flex flex-row justify-center')}>
              <View style={tailwind('justify-center w-3/4')}>
                  {toggleTime &&
                  <>
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
                              <Text style={tailwind('text-2xl text-gray-200 text-center')}>{reformatNumber(Math.trunc((duration/3600)%60))}</Text>
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
                              <Text style={tailwind('text-2xl text-black text-center')}>{reformatNumber(Math.trunc((duration/60)%60))}</Text>
                              <Text style={tailwind('text-lg text-black text-center')}>Min</Text>
                          </View>
                      </View>
                      <View style={tailwind('flex-row w-5')}>
                          <View style={tailwind('flex w-full')}>
                              <Text style={tailwind('text-sm text-black text-center')}>{reformatNumber(Math.trunc((duration)%60))}</Text>
                          </View>
                      </View>
                  </View>
                  <Pressable style={tailwind('flex-row justify-center')}>
                      <MaterialCommunityIcons onPress={handleTimeToggleEnd} name="stop-circle-outline" size={60} color="black" />
                  </Pressable>
                  </>
                  }
  
                  {!toggleTime &&
                  <Pressable style={[tailwind('flex-row justify-center'),styles.clipPath]}>
                      <MaterialIcons onPress={handleTimeToggleStart} name="play-circle-filled" size={60} color="black" />
                  </Pressable>
                  }
              </View>
          </View>
  
      )   
  }
  
  //I want to try and do a clippath to match the gif example
  const styles = StyleSheet.create({
      clipPath: {
        // backgroundColor: '#45215e',
        // clipPath: 'circle(1% at 0% 0%)',
      },
    });
    
  
  
