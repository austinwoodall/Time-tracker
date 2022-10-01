import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { AntDesign } from "@expo/vector-icons";
import { supabase } from "../config/supabase";
import * as WebBrowser from "expo-web-browser";
import { startAsync, makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

interface IProps {
	provider: string;
	authenticate: ({ user, session, error }: any) => Promise<void>;
}

const SocialButton = ({ provider, authenticate }: IProps) => {
	const tailwind = useTailwind();

	const authProvider = async (provider: any) => {
		// Create a URL that works for the environment the app is currently running in
		// Expo Client (dev): exp://128.0.0.1:19000/--/path
		// Expo Client (prod): exp://exp.host/@yourname/your-app/--/path
		const redirectUri = makeRedirectUri({ useProxy: false });
		startAsync({
			authUrl: `https://vmauxzzevkhbgvlxizcu.supabase.co/auth/v1/authorize?provider=${provider}&redirect_to=${redirectUri}`,
			returnUrl: redirectUri
		}).then(async (response: any) => {
			if (!response || !response.params?.refresh_token) return;
			const { session, error } = await supabase.auth.signIn({
				refreshToken: response.params?.refresh_token
			});
			// console.log("user", user);
			// console.log("session", session);
			// console.log("error", error);

			const sessionData = {
				access_token: session?.access_token,
				expires_at: session?.expires_at,
				expires_in: session?.expires_in,
				refresh_token: session?.refresh_token,
				token_type: session?.token_type,
				user_metadata: session?.user?.user_metadata
			};

			return authenticate({ session: sessionData, error });
		});
		return;
	};

	const signInWithGoogle = () => {
		return authProvider("google");
	};
	const signInWithGithub = () => {
		return authProvider("github");
	};

	const SocialProvider = () => {
		switch (provider) {
			case "github":
				return (
					<TouchableOpacity
						onPress={signInWithGithub}
						style={[
							tailwind("px-4 py-3 m-2 flex-row bg-blue-400 rounded-full"),
							{ textAlign: "center" }
						]}
					>
						<View style={[tailwind("mr-2")]}>
							<AntDesign name={"github"} size={24} color={"white"} />
						</View>
						<Text style={[tailwind("text-base text-white")]}>
							Continue with Github
						</Text>
					</TouchableOpacity>
				);
			case "google":
				return (
					<TouchableOpacity
						onPress={signInWithGoogle}
						style={[
							tailwind("px-4 py-3 m-2 flex-row bg-blue-400 rounded-full")
						]}
					>
						<View style={tailwind("mr-2")}>
							<AntDesign name={"google"} size={24} color={"white"} />
						</View>

						<Text
							style={[
								tailwind("text-base text-white"),
								{ alignSelf: "center", textAlign: "center" }
							]}
						>
							Continue with Google
						</Text>
					</TouchableOpacity>
				);
			default:
				return null;
		}
	};

	return SocialProvider();
};

export default SocialButton;

const styles = StyleSheet.create({
	container: {}
});
