import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
     <Image source={require('./foco.png')} />

     <View style={styles.actions}>
        <Text style={styles.timer}>
          25:00
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
     </View>

     <View>
      <Text>
        Projeto fictício e sem fins comerciais.Desenvolvido por Aluno. 
      </Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#021123',
    },
    actions:{
      padding: 24,
      backgroundColor: '#14448080',
      width: '80%',
      borderRadius: 32,
      borderWidth: 2,
      borderColor: '#144480',
      alignItems: "center",
    },
    timer: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#B872FF',
      borderRadius: 32,
      padding: 8,
    },
    buttonText: {
      fontSize: 18,
      color: '#021123',
    }
  }
);


