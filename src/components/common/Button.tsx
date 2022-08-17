import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({
	title,
	buttonColor,
	textColor,
	onPress,
	buttonStyles
}: any) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			style={[buttonStyles, styles.container]}
		>
			<Text style={[styles.buttonText]}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 15,
		backgroundColor: "#2196F3",
		margin: 10,
		borderRadius: 5
	},
	buttonText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "400",
		textAlign: "center"
	}
});
