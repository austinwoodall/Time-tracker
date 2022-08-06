import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Button } from "../components";

const ProjectListScreen = () => {
	const tailwind = useTailwind();
	const navigation = useNavigation();

	return (
		<View style={tailwind("flex h-full items-center justify-center")}>
			<Text style={tailwind("text-xl text-gray-600 font-bold")}>
				You have no projects currently.
			</Text>
			<Text style={tailwind("text-lg text-gray-500")}>
				Lets start by creating one!
			</Text>
			<Button
				title={"Start a Project"}
				buttonColor={"bg-blue-500"}
				textColor={"text-gray-200"}
				onPress={() => navigation.navigate("CreateProject")}
			/>
		</View>
	);
};

export default ProjectListScreen;
