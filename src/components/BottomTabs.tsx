import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";

const BottomTabs = ({ state, descriptors, navigation }: any) => {
	const tailwind = useTailwind();
	return (
		<View
			style={tailwind(
				"absolute self-center bottom-6 mx-4 flex-row rounded-xl justify-between pt-4 pb-4 pl-1 pr-1 bg-gray-800"
			)}
		>
			{state?.routes.map((route: any, index: any) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true
					});
					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					descriptors.emit({
						type: "tabLongPress",
						target: route.key
					});
				};
				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={[{ flex: 1 }]}
					>
						<Text
							style={[
								{
									textAlign: "center"
								},
								isFocused ? tailwind("text-blue-400") : tailwind("text-white")
							]}
						>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomTabs;
