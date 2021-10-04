import React from "react";
import {StyleSheet, Text} from "react-native";
import {View} from "./Themed";

interface Props {}

const Project = (props: Props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.container__title}>PROJECT TITLE</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		height: 150,
		borderRadius: 10,
		backgroundColor: "red",
		flexBasis: 130,
	},
	container__title: {
		margin: 15,
		color: "white",
		fontWeight: "bold",
	},
});

export default Project;
