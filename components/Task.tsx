import React from "react";
import {StyleSheet, Text} from "react-native";
import {ITask} from "../types/types";
import {View} from "./Themed";

type Props = Omit<ITask, "id">;

const Task = ({title, description, assignedTo}: Props) => {
	return (
		<View style={styles.task}>
			<Text style={styles.task__title}>{title}</Text>
			<Text style={styles.task__description}>{description}</Text>
			<Text style={styles.task__assignedTo}>Assigned to: {assignedTo.firstName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	task: {
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
	task__description: {
		color: "white",
		marginLeft: 15,
		marginBottom: 15,
	},
	task__assignedTo: {
		color: "#ffffff92",
		marginLeft: 15,
		marginBottom: 15,
	},
});

export default Task;
