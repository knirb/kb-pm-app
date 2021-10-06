import {ApolloQueryResult, OperationVariables} from "@apollo/client";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {CompositeNavigationProp} from "@react-navigation/core";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useEffect} from "react";
import {RootStackParamList, RootTabParamList} from "../types";

const useApolloRefetchOnScreenChange = (
	navigation: CompositeNavigationProp<
		BottomTabNavigationProp<RootTabParamList>,
		NativeStackNavigationProp<RootStackParamList>
	>,
	refetch: (
		variables?: Partial<OperationVariables> | undefined
	) => Promise<ApolloQueryResult<any>>
) => {
	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			if (refetch) {
				refetch();
			}
		});

		return unsubscribe;
	}, [navigation]);
};

export default useApolloRefetchOnScreenChange;
