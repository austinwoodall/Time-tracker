import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

//duration is in seconds
interface Props {
	task: string;
	duration?: number;
	description?: string;
	note?: string;
}

const reformatNumber = (num: number): string => {
	return Math.trunc(num / 10) > 0 ? num.toString() : "0" + num.toString();
};

//Task card
export default function TaskCard({
	task,
	duration = 0,
	description = "",
	note = ""
}: Props) {
	const day = Math.trunc((duration / 86400) % 60).toString();
	const hr = reformatNumber(Math.trunc((duration / 3600) % 60));
	const min = reformatNumber(Math.trunc((duration / 60) % 60));
	const sec = reformatNumber(Math.trunc(duration % 60));

	const [viewNotes, setViewNotes] = useState(false);
	const handleViewNotes = () => {
		setViewNotes(!viewNotes);
	};

	return (
		<View style={{}}>
			<View style={{}}>
				<View style={{}}>
					<Text style={{}}>{task} </Text>
					<Text style={{}}>{description} </Text>
				</View>
				<View style={{}}>
					<MaterialIcons
						style={{}}
						name="play-circle-filled"
						size={28}
						color="black"
					/>
					<Text style={{}}>
						{day}:{hr}:{min}:{sec}{" "}
					</Text>
				</View>
			</View>
			<View style={{}}>
				<View style={{}}>
					{note.length > 0 &&
						(viewNotes ? (
							<>
								<Text>Notes</Text>
								<MaterialIcons
									onPress={handleViewNotes}
									name="keyboard-arrow-up"
									size={20}
									color="gray"
								/>
							</>
						) : (
							<>
								<Text>Notes</Text>
								<MaterialIcons
									onPress={handleViewNotes}
									name="keyboard-arrow-down"
									size={20}
									color="gray"
								/>
							</>
						))}
				</View>
				{note.length > 0 && viewNotes && <Text>{note}</Text>}
			</View>
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
