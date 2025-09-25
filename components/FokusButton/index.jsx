import {  Pressable, StyleSheet, Text,  } from "react-native";

export const FokusButton = ( { press } ) => {
    return (
        <Pressable style={styles.button} onPress={press}>
            <Text style={styles.buttonText}>
                Começar
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create(
  {
    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
      color: '#021123',
      textAlign: "center",
      fontWeight: 'bold',
    },
  }
);
