import React from "react";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import { MainNavigator } from "./src/navigation";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
	return (
		<TailwindProvider utilities={utilities}>
			<StatusBar style="auto" />
			<MainNavigator />
		</TailwindProvider>
	);
}
