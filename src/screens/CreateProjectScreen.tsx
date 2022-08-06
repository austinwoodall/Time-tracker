import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "../components";

const CreateProjectScreen = () => {
	const tailwind = useTailwind();
	const navigation = useNavigation();
	return (
		<View style={[{ flex: 1 }, tailwind("flex-col")]}>
			<View style={[{ flex: 0 }, tailwind("flex-row p-6")]}>
				<View style={[tailwind("grow self-center")]}>
					<Text
						style={tailwind("text-gray-500 self-center text-2xl font-bold")}
					>
						Create Project
					</Text>
				</View>
				<View style={tailwind("")}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons name={"close"} size={34} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={[{ flex: 1 }, tailwind("flex-col")]}>
				<Input
					style={tailwind(
						"bg-gray-200 mx-6 my-1 py-4 px-4 text-gray-500 rounded"
					)}
					placeholder={"Name"}
				/>
				<Input
					style={tailwind(
						"bg-gray-200 mx-6 my-1 py-4 px-4 text-gray-500 rounded"
					)}
					placeholder={"Rate"}
				/>
				<Input
					style={tailwind(
						"bg-gray-200 mx-6 my-1 py-4 px-4 text-gray-500 rounded"
					)}
					placeholder={"Description"}
				/>
				<Input
					style={tailwind(
						"bg-gray-200 mx-6 my-1 py-4 px-4 text-gray-500 rounded"
					)}
					placeholder={"Expected Hours"}
				/>
			</View>
			<View style={[{ flex: 0 }, tailwind("flex-col grow-2")]}>
				<Button
					title={"Create"}
					styles={tailwind("mx-6")}
					buttonColor={"bg-blue-300"}
				/>
			</View>
		</View>
	);
};

export default CreateProjectScreen;
