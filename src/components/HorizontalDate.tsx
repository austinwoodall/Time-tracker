import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { sub, add, format } from "date-fns";

interface DateCardProps {
	day: Date;
}

function DateCard({ day }: DateCardProps) {
	const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
	const dayIndex =
		typeof format(day, "i") === "string"
			? parseInt(format(day, "i")) - 1
			: -999;

	return (
		<View style={{}}>
			<View style={{}}></View>
			<Text style={{}}>
				{typeof dayIndex === "number" && daysOfWeek[dayIndex]}
			</Text>
			<Text style={{}}>{day.getDate()}</Text>
		</View>
	);
}

export default function HorizontalDate() {
	const today = new Date();
	const weekDays = [
		{ day: sub(today, { days: 7 }), id: "1" },
		{ day: sub(today, { days: 6 }), id: "2" },
		{ day: sub(today, { days: 5 }), id: "3" },
		{ day: sub(today, { days: 4 }), id: "4" },
		{ day: sub(today, { days: 3 }), id: "5" },
		{ day: sub(today, { days: 2 }), id: "6" },
		{ day: sub(today, { days: 1 }), id: "7" },
		{ day: today, id: "8" },
		{ day: add(today, { days: 1 }), id: "9" },
		{ day: add(today, { days: 2 }), id: "10" },
		{ day: add(today, { days: 3 }), id: "11" },
		{ day: add(today, { days: 4 }), id: "12" },
		{ day: add(today, { days: 5 }), id: "13" },
		{ day: add(today, { days: 6 }), id: "14" },
		{ day: add(today, { days: 7 }), id: "15" }
	];
	return (
		<View style={{}}>
			<FlatList
				horizontal
				data={weekDays}
				renderItem={(itemData) => <DateCard day={itemData.item.day} />}
				keyExtractor={(item, index) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
