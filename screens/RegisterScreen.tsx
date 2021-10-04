import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { gql, useMutation } from "@apollo/client";

interface Props {}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const USER_MUTATION = gql`
  mutation createMemberMutation(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    createMember(
      input: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }
    ) {
      id
    }
  }
`;

const RegisterScreen = (props: Props) => {
  const [createUser, { data, error, loading }] = useMutation(USER_MUTATION);

  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: any) => {
    console.log(value);

    setUser((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log({...});

    createUser({ variables: { ...user } });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={user.firstName}
          onChangeText={(text) => handleChange("firstName", text)}
        />
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={user.lastName}
          onChangeText={(text) => handleChange("lastName", text)}
        />
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          textContentType="password"
          value={user.password}
          onChangeText={(text) => handleChange("password", text)}
        />
        <Button onPress={handleSubmit}>Register now!</Button>
        <Text>{data}</Text>
      </View>
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
    marginVertical: 20,
    height: 30,
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

export default RegisterScreen;
