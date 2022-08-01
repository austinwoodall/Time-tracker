import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Card = ({ children, style }: any) => {
<<<<<<< HEAD
    const tailwind = useTailwind();

    return <View style={[tailwind('')]}>{children}</View>;
}

export default Card;
=======
	const tailwind = useTailwind();

	return <View style={[tailwind("")]}>{children}</View>;
};

export default Card;
>>>>>>> 3cbdcf04a4df3bccd97e619a4665f5c40a883d2f
