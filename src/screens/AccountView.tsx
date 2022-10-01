import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../store";
import { supabase } from "../config/supabase";
import { useTailwind } from "tailwind-rn";

const AccountView = () => {
	const tailwind = useTailwind();
	const navigation = useNavigation();
	const session = useStore((state) => state.session);

	const logout = () => {
		supabase.auth
			.signOut()
			.then(() => useStore.setState({ session: {}, error: {} }));
	};

	const { avatar_url } = session.user_metadata;

	return (
		<View style={styles.container}>
			<View style={styles.topRow}>
				<Pressable onPress={() => navigation.goBack()}>
					<Text style={tailwind("text-blue-500 font-medium text-base")}>
						Close
					</Text>
				</Pressable>
				<Text style={tailwind("font-medium text-lg")}>Account</Text>
				<Pressable>
					<Text style={tailwind("text-blue-500 font-medium text-base")}>
						Save
					</Text>
				</Pressable>
			</View>

			<View style={{ alignSelf: "center" }}>
				<Image
					source={{ uri: avatar_url }}
					style={{ width: 200, height: 200, borderRadius: 100 }}
					width={125}
					height={125}
				/>
			</View>

			<Button title={"Go Back"} onPress={() => navigation.goBack()} />
			<Button title={"Logout"} onPress={() => logout()} />
		</View>
	);
};

export default AccountView;

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
