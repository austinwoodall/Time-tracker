import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import {useTailwind} from "tailwind-rn";

const OverviewScreen = () => {
    const tailwind = useTailwind()
    return (
        <SafeAreaView>
            <View style={tailwind('flex justify-center items-center')}>
                <Text style={tailwind('text-blue-500 ')}>Open up App.tsx to start working on your app!</Text>
            </View>
        </SafeAreaView>

    )
}

export default OverviewScreen;