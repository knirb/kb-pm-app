import * as React from "react";
import {FlatList, ScrollView, StyleSheet} from "react-native";
import {black} from "react-native-paper/lib/typescript/styles/colors";
import Task from "../components/Task";

import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "../components/Themed";

export default function TabTwoScreen() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.banner}>
				<Text style={styles.banner__title}>Project Name</Text>
				<View style={styles.banner__image}></View>
			</View>
			<Text style={styles.projectDescription}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis incidunt facilis
				velit beatae excepturi inventore aliquid placeat autem, cum possimus.
			</Text>
			<FlatList
				style={styles.tasks}
				data={[
					{key: "Devin"},
					{key: "Dan"},
					{key: "Dominic"},
					{key: "Jackson"},
					{key: "James"},
					{key: "Joel"},
					{key: "John"},
					{key: "Jillian"},
					{key: "Jimmy"},
					{key: "Julie"},
				]}
				renderItem={({item}) => (
					<Task key={item.key} title={item.key} description={"todo"} />
				)}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		height: "100%",
		backgroundColor: "#f0f0f0",
		opacity: 1,
	},
	banner: {
		borderRadius: 20,
		height: 270,
	},
	banner__image: {
		backgroundColor: "coral",
		borderBottomStartRadius: 20,
		borderBottomEndRadius: 20,
		height: 220,
	},
	banner__title: {
		position: "absolute",
		bottom: "5%",
		fontSize: 20,
		color: "dimgrey",
		marginLeft: 30,
		fontWeight: "bold",
	},
	projectDescription: {
		padding: 30,
		fontSize: 20,
		color: "dimgrey",
	},
	tasks: {
		paddingHorizontal: 30,
	},
});
