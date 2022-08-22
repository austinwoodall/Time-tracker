import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen, OverviewScreen } from "../screens";
import ProjectsNavigator from "./ProjectsNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import { useStore } from "../store";
import { AppState } from "react-native";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	useEffect(() => {
		const subscribe = useStore.subscribe(() => {
			const { user } = useStore.getState();
			setIsAuthenticated(!!user.user);
		});
		return subscribe;
	}, [isAuthenticated]);

	console.log("AppState", AppState.currentState);
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{isAuthenticated ? (
					<>
						<Stack.Screen name={"OverviewScreen"} component={OverviewScreen} />
						<Stack.Screen name={"Projects"} component={ProjectsNavigator} />
					</>
				) : (
					<Stack.Screen name={"Auth"} component={AuthScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
