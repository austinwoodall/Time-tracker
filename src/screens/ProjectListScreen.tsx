import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Button } from "../components";

const ProjectListScreen = () => {
	const navigation = useNavigation();
	const isThereProjects = true;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Projects</Text>
			</View>
			<ScrollView>
				{isThereProjects ? (
					<View style={{}}>
						<View style={styles.statusFilter}>
							<Text style={{}}>Status:</Text>
							<Text style={{}}>ALL</Text>
						</View>
					</View>
				) : (
					<>
						<View style={styles.emptyStateImage} />
						<View style={{ flex: 1 }}>
							<Text style={styles.emptyStateTitle}>No projects found.</Text>
							<Text style={styles.emptyStateSubtext}>
								Try creating a new project
							</Text>
						</View>
						<Button
							style={{ flex: 1 }}
							title={"NEW PROJECT"}
							onPress={() => navigation.navigate("CreateProject")}
						/>
					</>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProjectListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirections: "column"
	},
	header: {
		borderBottomColor: "#E8ECEF",
		borderBottomWidth: 1,
		paddingVertical: 10
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "400",
		lineHeight: 30
	},
	emptyStateImage: {
		height: 200,
		width: 263
	},
	emptyStateTitle: {
		fontSize: 20,
		fontWeight: "400",
		lineHeight: 23.7,
		textAlign: "center"
	},
	emptyStateSubtext: {
		fontSize: 14,
		fontWeight: "300",
		lineHeight: 21,
		textAlign: "center",
		color: "#778CA2"
	},
	statusFilter: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 15
	}
});
