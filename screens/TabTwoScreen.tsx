import React, {useEffect} from "react";
import {FlatList, StyleSheet} from "react-native";
import Task from "../components/Task";
import {gql, useQuery} from "@apollo/client";
import {Text, View} from "../components/Themed";
import {IProject} from "../types/types";

const READ_PROJECT = gql`
	query readProject($id: ID) {
		readOneProject(filter: {id: {eq: $id}}) {
			title
			tasks {
				nodes {
					id
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

export default function TabTwoScreen({route, navigation}: any) {
	const project: IProject = route?.params?.project ?? {
		id: "",
		title: "",
		description: "",
		tasks: [],
	};

	const {loading, error, data, refetch} = useQuery(READ_PROJECT, {
		variables: {id: project.id},
	});

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			// This check is to prevent error on component mount. The refetch function is defined only after the query is run once
			// It also ensures that refetch runs only when you go back and not on component mount
			if (refetch) {
				// This will re-run the query
				refetch();
			}
		});

		return unsubscribe;
	}, [navigation]);

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
				keyExtractor={task => task.id}
				renderItem={({item: task}) => (
					<Task
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
