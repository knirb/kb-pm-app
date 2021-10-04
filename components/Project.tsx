import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {CompositeNavigationProp} from "@react-navigation/core";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {RootStackParamList, RootTabParamList} from "../types";
import {IProject} from "../types/types";
import {View} from "./Themed";

interface Props {
	project: IProject;
	navigation: CompositeNavigationProp<
		BottomTabNavigationProp<RootTabParamList, "TabOne">,
		NativeStackNavigationProp<RootStackParamList>
	>;
}

const Project = ({project, navigation}: Props) => {
	return (
		<TouchableOpacity onPress={() => navigation.navigate("TabTwo", {project: project} as any)}>
			<View style={styles.container}>
				<Text style={styles.container__title}>{project.title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		height: 150,
		borderRadius: 10,
		backgroundColor: "coral",
		width: 130,
	},
	container__title: {
		margin: 15,
		color: "white",
		fontWeight: "bold",
	},
});

export default Project;
