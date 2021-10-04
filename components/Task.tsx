import React from "react";
import {StyleSheet, Text} from "react-native";
import {View} from "./Themed";

interface Props {
	title: string;
	description: string;
}

const Task = ({title}: Props) => {
	return (
		<View style={styles.task}>
			<Text style={styles.task__title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	task: {
		height: 50,
		marginVertical: 5,
		borderRadius: 10,
		backgroundColor: "coral",
		color: "white",
	},
	task__title: {
		margin: 15,
		color: "white",
		fontWeight: "bold",
	},
});

export default Task;
