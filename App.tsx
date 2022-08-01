<<<<<<< HEAD
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
=======
import React from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { MainNavigator } from "./src/navigation";

export default function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<StatusBar style="auto" />
			<MainNavigator />
		</TailwindProvider>
	);
>>>>>>> 3cbdcf04a4df3bccd97e619a4665f5c40a883d2f
}
