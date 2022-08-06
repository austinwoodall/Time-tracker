import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = ({ title, buttonColor, textColor, onPress, styles }: any) => {
	const [buttonColorState, setButtonColorState] = useState(buttonColor);
	const [textColorState, setTextColorState] = useState(textColor);
	const tailwind = useTailwind();

	useEffect(() => {
		setButtonColorState(buttonColor);
		setTextColorState(textColor);
	}, [buttonColor, textColor]);
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={onPress}
			style={[tailwind(`${buttonColorState} p-2 rounded`), styles]}
		>
			<Text style={tailwind(`${textColorState}`)}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Button;
