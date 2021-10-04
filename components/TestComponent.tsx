import {StyleSheet, Text, View} from "react-native";

import React from "react";

const TestComponent = () => {
	return (
		<View style={styles.wrapper}>
			<Text>HELLO WORLD!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: "coral",
		height: 300,
		borderRadius: 10,
	},
});

export default TestComponent;
