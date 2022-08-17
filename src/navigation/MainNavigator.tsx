import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OverviewScreen } from "../screens";
import ProjectsNavigator from "./ProjectsNavigator";
// import { BottomTabs } from "../components";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
	const isLoggedIn = false;
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="OverviewTab" component={OverviewScreen} />
				<Tab.Screen name={"ProjectsTab"} component={ProjectsNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
