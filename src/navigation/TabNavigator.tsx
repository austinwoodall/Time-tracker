import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OverviewScreen } from "../screens";
import ProjectsNavigator from "./ProjectsNavigator";
// import { BottomTabs } from "../components";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name="OverviewTab" component={OverviewScreen} />
			<Tab.Screen name={"ProjectsTab"} component={ProjectsNavigator} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
