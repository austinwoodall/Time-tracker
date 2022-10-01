import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface IProps {
	name: any;
	size: number;
	color: string;
}

const Icon = (props: IProps) => {
	return (
		<MaterialIcons name={props.name} size={props.size} color={props.color} />
	);
};

export default Icon;
