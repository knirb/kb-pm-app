import {StatusBar} from "expo-status-bar";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:8080/graphql",
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Basic YWRtaW46cGFzc3dvcmQ=`,
	},
});

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ApolloProvider client={client}>
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</SafeAreaProvider>
			</ApolloProvider>
		);
	}
}
