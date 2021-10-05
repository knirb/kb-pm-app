import * as React from "react";
import {FlatList, ScrollView, StyleSheet} from "react-native";
import {black} from "react-native-paper/lib/typescript/styles/colors";
import Task from "../components/Task";
import {gql, useQuery} from "@apollo/client";
import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "../components/Themed";
import {IProject} from "../types/types";
import {SafeAreaView} from "react-native-safe-area-context";

const READ_PROJECT = gql`
	query readProject($id: ID) {
		readOneProject(filter: {id: {eq: $id}}) {
			title
			title
			tasks {
				nodes {
					title
					description
					assignedTo {
						firstName
						surname
					}
				}
			}
		}
	}
`;

export default function TabTwoScreen({route}: any) {
	const project: IProject = route.params.project;

	const {loading, error, data} = useQuery(READ_PROJECT, {
		variables: {id: project.id},
	});

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error! ${error.message}</Text>;

	return (
		<View style={styles.container}>
			<View style={styles.banner}>
				<Text style={styles.banner__title}>{project.title}</Text>
				<View style={styles.banner__image}></View>
			</View>
			<Text style={styles.projectDescription}>{project.description}</Text>
			<FlatList
				style={styles.tasks}
				data={data?.readOneProject?.tasks?.nodes ?? []}
				keyExtractor={(task, index) => task.id}
				renderItem={({item: task}) => (
					<Task
						key={task.id}
						title={task.title}
						description={task.description}
						assignedTo={task.assignedTo}
					/>
				)}
			/>
		</View>
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
