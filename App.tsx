import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider, useTailwind} from "tailwind-rn";
import utilities from "./tailwind.json";
import {OverviewScreen} from "./src/screens";

export default function App() {
  return (
      <TailwindProvider utilities={utilities}>
          <StatusBar style="auto" />
          <OverviewScreen />
      </TailwindProvider>
  );
}
