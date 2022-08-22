import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GithubButton, GoogleButton, SocialButton } from "../components";
import { useTailwind } from "tailwind-rn";
import { useStore } from "../store";

interface Props {}

const AuthScreen = () => {
	const tailwind = useTailwind();

	const authenticateUser = async ({ user, session, error }: any) => {
		useStore.setState({
			user,
			session,
			error
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.greetingContainer}>
				<Text
					style={[
						styles.greeting,
						tailwind("text-xl text-center font-semibold")
					]}
				>
					Welcome back
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<View style={[styles.buttonBox, tailwind("bg-blue-200")]}>
					<GoogleButton />
					<GithubButton />
					<View
						style={{
							alignSelf: "center",
							flexDirection: "row",
							alignItems: "center"
						}}
					>
						<Text style={tailwind("text-center")}>
							By signing in, you agree to App Name's Terms of Service and
							acknowledge that App Name's Privacy Policy applies to you.
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingTop: 50
	},
	greetingContainer: {
		flex: 1
	},
	greeting: {},
	buttonContainer: {
		flex: 0.6
	},
	buttonBox: {
		flex: 1,
		flexDirection: "column",
		margin: 20,
		borderRadius: 10,
		justifyContent: "center",
		padding: 20
	}
});
