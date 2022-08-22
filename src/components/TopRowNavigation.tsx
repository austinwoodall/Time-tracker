import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "./index";

const TopRowNavigation = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity activeOpacity={0.7} style={styles.card}>
					<Icon name={"check"} size={40} color={"lightblue"} />
					<Text>To-dos</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.7} style={styles.card}>
					<Icon name={"sticky-note-2"} size={40} color={"lightblue"} />
					<Text>Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.7} style={styles.card}>
					<Icon name={"notifications-active"} size={40} color={"lightblue"} />
					<Text>Notifications</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopRowNavigation;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		flex: 1
	},
	row: {
		alignSelf: "center",
		flexDirection: "row",
		marginVertical: 15
	},
	card: {
		marginHorizontal: 6,
		flexBasis: "31%",
		paddingVertical: 20,
		paddingHorizontal: 12,
		borderRadius: 10,
		backgroundColor: "white",
		alignItems: "center"
	}
});
