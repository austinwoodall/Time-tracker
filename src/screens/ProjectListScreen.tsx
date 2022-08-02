import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Button } from "../components";


const ProjectListScreen = () => {
	const tailwind = useTailwind();

	return (
		<View style={[tailwind("flex h-full items-center justify-center")]}>
			<Text style={[tailwind("text-xl text-gray-600 font-bold")]}>
				You have no projects currently.
			</Text>
			<Text style={[tailwind("text-lg text-gray-500")]}>
				Lets start by creating one!
			</Text>
			<Button
				title={"Start a Project"}
				buttonColor={"red-500"}
				textColor={"gray-200"}
			/>
		</View>
	);
};

export default ProjectListScreen;
