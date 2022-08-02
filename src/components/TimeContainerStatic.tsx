
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
  export default function TimeContainerStatic({initialTime=0}:Props){
      const tailwind = useTailwind();
      const reformatNumber=(num:number):string=>{
        return Math.trunc(num/10)>0?num.toString():'0'+num.toString()
      }
  
      return(

          <View style={tailwind('bg-gray-600 mx-auto w-full rounded-sm border-black border-2 py-5 flex flex-row justify-center')}>
              <View style={tailwind('justify-center w-3/4')}>
                  <View style={tailwind('flex-row justify-center')}>
                      <View style={tailwind('flex-row w-12')}>
                          <View style={tailwind('flex justify-between w-full')}>
                              <Text style={tailwind('text-2xl text-gray-300 text-center')}>{Math.trunc((initialTime/86400)%60)}</Text>
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
                              <Text style={tailwind('text-2xl text-gray-200 text-center')}>{reformatNumber(Math.trunc((initialTime/3600)%60))}</Text>
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
                              <Text style={tailwind('text-2xl text-black text-center')}>{reformatNumber(Math.trunc((initialTime/60)%60))}</Text>
                              <Text style={tailwind('text-lg text-black text-center')}>Min</Text>
                          </View>
                      </View>
                      <View style={tailwind('flex-row w-5')}>
                          <View style={tailwind('flex w-full')}>
                              <Text style={tailwind('text-sm text-black text-center')}>{reformatNumber(Math.trunc((initialTime)%60))}</Text>
                          </View>
                      </View>
                  </View>
                  {/* <Pressable style={tailwind('flex-row justify-center')}>
                      <MaterialCommunityIcons name="stop-circle-outline" size={60} color="black" />
                  </Pressable> */}
              </View>
          </View>
  
      )   
  }
  
  const styles = StyleSheet.create({
      container: {
        // backgroundColor: '#45215e',
        // clipPath: 'circle(1% at 0% 0%)',
      },
    });
    
  
  
