import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const CreateProjectScreen = () => {
    const tailwind = useTailwind();
    return (
        <SafeAreaView style={tailwind('bg-blue-200')}>
            <View style={tailwind('flex h-full bg-blue-200 justify-center items-center')}>
                <Text style={tailwind('text-blue-500 ')}>Open up App.tsx to start working on your app!</Text>
            </View>
        </SafeAreaView>
    )
}

export default CreateProjectScreen;