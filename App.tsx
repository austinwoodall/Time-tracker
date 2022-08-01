import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import {MainNavigator} from "./src/navigation";
import TimeContainer from './src/components/TimeContainer';
import TaskCard from './src/components/TaskCard';
import TaskContainer from './src/components/TaskContainer';

export default function App() {
  return (
      <TailwindProvider utilities={utilities} >
          <StatusBar style="auto" />
          <MainNavigator />
      </TailwindProvider>
  );
}
