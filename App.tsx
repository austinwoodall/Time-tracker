import React from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import {OverviewScreen} from "./src/screens";
import TimerContainer from './src/components/TimerContainer';
import TaskCard from './src/components/TaskCard';
import { MainNavigator } from "./src/navigation";


export default function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<StatusBar style="auto" />
			<MainNavigator />
		</TailwindProvider>
	);
}
