import { View, Text, TouchableOpacity } from "react-native";

const BottomTabs = ({ state, descriptors, navigation }: any) => {
	return (
		<View style={{}}>
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
								isFocused ? "white" : "gray"
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
