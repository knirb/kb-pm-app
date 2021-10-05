import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useUser } from "../components/UserProvider";
interface Props {}

const SettingsScreen = (props: Props) => {
  const User = useUser();
  const handleClick = () => {
    User.logout();
  };
  return <View>{User.id && <Button onPress={handleClick}>Logout</Button>}</View>;
};

export default SettingsScreen;
