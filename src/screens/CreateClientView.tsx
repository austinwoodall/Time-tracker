import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

const CreateClientView = () => {
	const navigation = useNavigation();
	const tailwind = useTailwind();
	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<Pressable onPress={() => navigation.goBack()}>
					<Text style={tailwind("text-blue-500 font-medium text-base")}>
						Close
					</Text>
				</Pressable>
				<Text style={tailwind("font-medium text-lg")}>Create Client</Text>
				<Pressable>
					<Text style={tailwind("text-blue-500 font-medium text-base")}>
						Save
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default CreateClientView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 40,
		paddingHorizontal: 20
	},
	topRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 10
	}
});
