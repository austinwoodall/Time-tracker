import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//not used yet
interface Props {
	initialTime?: number;
}

//Task card
export default function TimeContainer({ initialTime = 0 }: Props) {
	const reformatNumber = (num: number): string => {
		return Math.trunc(num / 10) > 0 ? num.toString() : "0" + num.toString();
	};

	const [toggleTime, setToggleTime] = useState(false);
	const [timeStart, setTimeStart] = useState<Date | null>(null);
	const [timeEnd, setTimeEnd] = useState<Date | null>(null);
	const [duration, setDuration] = useState(initialTime);

	const timeRef: { current: NodeJS.Timeout | null } = useRef(null);

	useEffect(() => {
		setDuration(
			timeEnd !== null && timeStart !== null
				? Math.floor((timeEnd.getTime() - timeStart.getTime()) / 1000) +
						initialTime
				: initialTime
		);
	}, [timeEnd]);

	const handleTimeToggleStart = () => {
		setToggleTime(!toggleTime);
		setTimeStart(new Date());
		const id = setInterval(() => {
			setTimeEnd(new Date());
		}, 1000);
		timeRef.current = id;
	};
	const handleTimeToggleEnd = () => {
		setToggleTime(!toggleTime);
		setTimeStart(null);
		setTimeEnd(null);
		setDuration(initialTime);
		clearInterval(timeRef.current as NodeJS.Timeout);
	};

	return (
		<View style={{}}>
			<View style={{}}>
				{toggleTime && (
					<>
						<View style={{}}>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>{Math.trunc((duration / 86400) % 60)}</Text>
									<Text style={{}}>Day</Text>
								</View>
							</View>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>:</Text>
								</View>
							</View>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>
										{reformatNumber(Math.trunc((duration / 3600) % 60))}
									</Text>
									<Text style={{}}>Hr</Text>
								</View>
							</View>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>:</Text>
								</View>
							</View>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>
										{reformatNumber(Math.trunc((duration / 60) % 60))}
									</Text>
									<Text style={{}}>Min</Text>
								</View>
							</View>
							<View style={{}}>
								<View style={{}}>
									<Text style={{}}>
										{reformatNumber(Math.trunc(duration % 60))}
									</Text>
								</View>
							</View>
						</View>
						<Pressable style={{}}>
							<MaterialCommunityIcons
								onPress={handleTimeToggleEnd}
								name="stop-circle-outline"
								size={60}
								color="black"
							/>
						</Pressable>
					</>
				)}

				{!toggleTime && (
					<Pressable style={[styles.clipPath]}>
						<MaterialIcons
							onPress={handleTimeToggleStart}
							name="play-circle-filled"
							size={60}
							color="black"
						/>
					</Pressable>
				)}
			</View>
		</View>
	);
}

//I want to try and do a clippath to match the gif example
const styles = StyleSheet.create({
	clipPath: {
		// backgroundColor: '#45215e',
		// clipPath: 'circle(1% at 0% 0%)',
	}
});
