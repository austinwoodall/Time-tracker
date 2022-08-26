import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from ".";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

const NavigationList = () => {
	const tailwind = useTailwind();
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<View style={styles.navigation}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Clients")}
					activeOpacity={0.7}
					style={[styles.navigationCard, tailwind("bg-blue-200")]}
				>
					<Icon name={"person-pin"} size={40} color={"blue"} />
					<Text style={tailwind("text-sm text-gray-700 font-medium")}>
						Clients
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.7}
					style={[styles.navigationCard, tailwind("bg-green-200")]}
				>
					<Icon name={"payments"} size={40} color={"green"} />
					<Text style={tailwind("text-sm text-gray-700 font-medium")}>
						Invoices
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Projects")}
					activeOpacity={0.7}
					style={[styles.navigationCard, tailwind("bg-orange-200")]}
				>
					<Icon name={"card-travel"} size={40} color={"orange"} />
					<Text style={tailwind("text-sm text-gray-700 font-medium")}>
						Projects
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.7}
					style={[styles.navigationCard, tailwind("bg-red-200")]}
				>
					<Icon name={"timer"} size={40} color={"red"} />
					<Text style={tailwind("text-sm text-gray-700 font-medium")}>
						Time Tracking
					</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				style={[
					styles.navigationCard,
					tailwind("bg-slate-300"),
					{ height: 140 }
				]}
			>
				<Icon name={"settings"} size={40} color={"gray"} />
				<Text style={tailwind("text-sm text-gray-700 font-medium")}>
					Settings
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NavigationList;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20
	},
	navigation: {
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap"
	},
	navigationCard: {
		backgroundColor: "white",
		padding: 20,
		flexBasis: "48.5%",
		marginVertical: 5,
		height: 180,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center"
	}
});
