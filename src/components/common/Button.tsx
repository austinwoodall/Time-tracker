import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const Button = ({title, onPress, buttonStyle, textStyle}: any) => {
    const tailwind = useTailwind()
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[buttonStyle, tailwind('bg-blue-300 p-2 rounded')]}>
            <Text style={[textStyle, tailwind('text-blue-500')]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;
