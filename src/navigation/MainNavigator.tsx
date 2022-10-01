import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
	AccountView,
	AuthView,
	ClientsView,
	CreateClientView,
	HomeView
} from "../screens";
import ProjectsNavigator from "./ProjectsNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useStore } from "../store";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	const session = useStore((state) => state.session);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{Object.entries(session).length > 0 ? (
					<>
						<Stack.Screen name={"OverviewScreen"} component={HomeView} />
						<Stack.Screen name={"Projects"} component={ProjectsNavigator} />
						<Stack.Screen
							name={"Account"}
							component={AccountView}
							options={{ presentation: "fullScreenModal" }}
						/>
						<Stack.Screen name={"Clients"} component={ClientsView} />
						<Stack.Screen name={"CreateClient"} component={CreateClientView} />
					</>
				) : (
					<>
						<Stack.Screen
							name={"Auth"}
							component={AuthView}
							options={{
								// When logging out, a pop animation feels intuitive
								// You can remove this if you want the default 'push' animation
								animationTypeForReplace:
									Object.entries(session).length > 0 ? "pop" : "push"
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
