import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateProjectView, ProjectsView } from "../screens";

const Stack = createNativeStackNavigator();

const ProjectsNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName={"ProjectsView"}
		>
			<Stack.Screen name={"ProjectsView"} component={ProjectsView} />
			<Stack.Screen name={"CreateProject"} component={CreateProjectView} />
		</Stack.Navigator>
	);
};

export default ProjectsNavigator;
