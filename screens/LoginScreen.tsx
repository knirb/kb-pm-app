import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { gql, useQuery } from "@apollo/client";

interface Props {}

const LOGIN_MUTATION = gql`
  query LoginQuery($email: String) {
    readOneMember(filter: { email: { eq: $email } }) {
      id
      email
      firstName
      surname
    }
  }
`;

const LoginScreen = (props: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { data, error, loading, refetch } = useQuery(LOGIN_MUTATION);

  const handleClick = () => {
    refetch({ email });
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>{JSON.stringify(data)}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={pass} onChangeText={(text) => setPass(text)} />
      </View>
      <Button onPress={handleClick}>Log in</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 5,
    marginVertical: 25,
    height: 50,
    backgroundColor: "white",
    color: "black",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  label: {},
  form: { width: "80%" },
});

export default LoginScreen;
