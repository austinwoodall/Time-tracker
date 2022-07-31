import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Card = ({ children, style }: any) => {
    const tailwind = useTailwind();

    return <View style={[tailwind('')]}>{children}</View>;
}

export default Card;