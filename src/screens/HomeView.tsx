import React from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import { NavigationList, TopRowNavigation } from "../components";
import { format } from "date-fns";
import { useTailwind } from "tailwind-rn";
import { useStore } from "../store";

const HomeView = () => {
	const tailwind = useTailwind();
	const todayWeekday = new Date();
	const store = useStore((state) => state?.session?.user_metadata.name);
	const name = store?.substr(0, store.indexOf(" "));

	return (
		<View style={styles.container}>
			<View style={[styles.greetingContainer, tailwind("bg-blue-400")]}>
				<Text style={styles.greeting}>Hello {name},</Text>
				<Text style={styles.sub}>
					Happy {format(todayWeekday, "eeee")}, Let's hustle!
				</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TopRowNavigation />
				<NavigationList />
			</ScrollView>
		</View>
	);
};

export default HomeView;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column"
	},
	greetingContainer: {
		paddingTop: 70,
		paddingHorizontal: 20,
		paddingBottom: 30,
		backgroundColor: "violet"
	},
	greeting: {
		color: "white",
		fontSize: 20,
		lineHeight: 30,
		fontWeight: "500"
	},
	sub: {
		fontSize: 16,
		color: "white",
		fontWeight: "400"
	}
});
