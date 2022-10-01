import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = (props: any) => {
	return (
		<TextInput
			{...props}
			style={styles.container}
			placeholderTextColor={"gray"}
		/>
	);
};

export default Input;

const styles = StyleSheet.create({
	container: {
		borderColor: "gray",
		borderWidth: 1,
		marginVertical: 5,
		marginHorizontal: 10,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 5,
		fontSize: 18
	}
});
