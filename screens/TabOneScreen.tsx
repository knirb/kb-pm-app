import React from "react";
import {StyleSheet, TextInput} from "react-native";
import {Text, View} from "../components/Themed";
import {RootTabScreenProps} from "../types";
import Project from "../components/Project";
import {useUser} from "../components/UserProvider";
import {IProject} from "../types/types";
import {gql, useQuery} from "@apollo/client";
import useApolloRefetchOnScreenChange from "../hooks/useApolloRefetchOnScreenChange";

const READ_PROJECTS = gql`
	query {
		readProjects {
			id
			title
			description
			tasks {
				nodes {
					title
					description
				}
			}
		}
	}
`;

export default function TabOneScreen({navigation}: RootTabScreenProps<"TabOne">) {
	const {loading, error, data, refetch} = useQuery(READ_PROJECTS);

	useApolloRefetchOnScreenChange(navigation, refetch);

	const User = useUser();

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error! ${error.message}</Text>;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.header__greeting}>Hello,</Text>
				<Text style={styles.header__name}>{User.firstName && User.firstName} 👋</Text>
			</View>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<TextInput style={styles.projectsHeader} editable={false} value={"Projects"} />
			<View style={styles.projects}>
				{data.readProjects.map((project: IProject) => (
					<Project key={project.id} project={project} navigation={navigation} />
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		height: "100%",
	},
	header: {
		paddingTop: 20,
	},
	header__greeting: {
		color: "grey",
	},
	header__name: {
		fontSize: 30,
		fontWeight: "bold",
		color: "dimgrey",
	},
	projectsHeader: {
		fontSize: 20,
		color: "dimgrey",
		fontWeight: "bold",
		borderStyle: "solid",
		borderLeftWidth: 5,
		borderLeftColor: "lightgreen",
		paddingLeft: 10,
	},
	projects: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 10,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
