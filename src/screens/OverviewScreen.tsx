<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 3cbdcf04a4df3bccd97e619a4665f5c40a883d2f
import { SafeAreaView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Button } from "../components";

const OverviewScreen = () => {
<<<<<<< HEAD
    const tailwind = useTailwind()
    return (
        <SafeAreaView style={tailwind('bg-blue-200')}>
            <View style={tailwind('flex h-full bg-blue-200 justify-center items-center')}>
                <Text style={tailwind('text-blue-500 ')}>Open up App.tsx to start working on your app!</Text>
                <Button title={'Button'}/>
            </View>
        </SafeAreaView>
=======
	const tailwind = useTailwind();
	return (
		<SafeAreaView style={tailwind("bg-blue-200")}>
			<View
				style={tailwind("flex h-full bg-blue-200 justify-center items-center")}
			>
				<Text style={tailwind("text-blue-500 ")}>
					Open up App.tsx to start working on your app!
				</Text>
				<Button title={"Button"} />
			</View>
		</SafeAreaView>
	);
};
>>>>>>> 3cbdcf04a4df3bccd97e619a4665f5c40a883d2f

export default OverviewScreen;
