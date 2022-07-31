import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
<<<<<<< HEAD
import {OverviewScreen} from "./src/screens";
import TimerContainer from './src/components/TimerContainer';
import TaskCard from './src/components/TaskCard';
=======
import {MainNavigator} from "./src/navigation";
>>>>>>> fb1a9b556812890731db5227c450b3e28e56ca15

export default function App() {
  return (
      <TailwindProvider utilities={utilities} >
          <StatusBar style="auto" />
<<<<<<< HEAD
          <OverviewScreen />

          <TimerContainer/>
          
          <TaskCard/>
          <TaskCard/>
          <TaskCard/>
        
=======
          <MainNavigator />
>>>>>>> fb1a9b556812890731db5227c450b3e28e56ca15
      </TailwindProvider>
  );
}
