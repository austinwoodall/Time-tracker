import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "./index";
import { useNavigation } from "@react-navigation/native";

const TopRowNavigation = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<TouchableOpacity activeOpacity={0.7} style={styles.card}>
					<Icon name={"check"} size={40} color={"lightblue"} />
					<Text style={styles.cardText}>My To-dos</Text>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.7} style={styles.card}>
					<Icon name={"sticky-note-2"} size={40} color={"lightblue"} />
					<Text style={styles.cardText}>My Notes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Account")}
					activeOpacity={0.7}
					style={styles.card}
				>
					<Icon name={"person"} size={40} color={"lightblue"} />
					<Text style={styles.cardText}>My Account</Text>
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
		alignItems: "center",
		justifyContent: "center"
	},
	cardText: {
		textAlign: "center"
	}
});
