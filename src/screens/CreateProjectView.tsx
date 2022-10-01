import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "../components";

const CreateProjectView = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<View style={[]}>
					<Text style={{}}>Add new project</Text>
				</View>
				<View style={{}}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Ionicons name={"close"} size={34} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={[{ flex: 1 }]}>
				<Input style={{}} placeholder={"Name"} />
				<Input style={[]} placeholder={"Rate"} />
				<Input style={[]} placeholder={"Description"} />
				<Input style={[]} placeholder={"Expected Hours"} />
			</View>
			<View style={[{ flex: 1 }]}>
				<Button title={"ADD"} styles={[{}]} />
			</View>
		</SafeAreaView>
	);
};

export default CreateProjectView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirections: "column"
	},
	header: {
		flexDirections: "row",
		justifyContent: "space-between",
		padding: 10
	}
});
