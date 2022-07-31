import React from 'react';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {OverviewScreen, ProjectListScreen} from "../screens";


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Overview" component={OverviewScreen} />
                <Tab.Screen name={"Projects"} component={ProjectListScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;