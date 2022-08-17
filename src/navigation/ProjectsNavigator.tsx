import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateProjectScreen, ProjectListScreen } from "../screens";

const Stack = createNativeStackNavigator();

const ProjectsNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={"Projects"} component={ProjectListScreen} />
			<Stack.Screen name={"CreateProject"} component={CreateProjectScreen} />
		</Stack.Navigator>
	);
};

export default ProjectsNavigator;
