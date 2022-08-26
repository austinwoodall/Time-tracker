import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../components";

const ClientsView = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text>Clients</Text>
			<Button
				title={"Create"}
				onPress={() => navigation.navigate("CreateClient")}
			/>
			<Button title={"Go back"} onPress={() => navigation.goBack()} />
		</View>
	);
};

export default ClientsView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 40,
		paddingHorizontal: 20
	}
});
