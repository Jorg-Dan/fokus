import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";


const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require('./curto.png'),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require('./longo.png'),
    display: "Pausa longa",
  },
];

export default function Index() {
  
    const [timeType, setTimeType] = useState(pomodoro[0])
  return (
    <View style={styles.container}>
     <Image source={timeType.image} />
 
     <View style={styles.actions}>

        <View style={styles.context}>
          {pomodoro.map(p => {
          <Pressable>
            key={p.id}
            style={ timeType.id === p.id ? styles.contextButtonActive : null}
            <Text style={styles.contextButtonText}>
              {p.display}
            </Text>
          </Pressable>
          })}
        </View>

        <Text style={styles.timer}>
          { new Date(timeType.initialValue * 1000).toLocaleTimeString("pt-br", {minute: "2-digit", second: "2-digit"}) }
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
     </View>

     <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais. 
      </Text>
      <Text style={styles.footerText}>
        Desenvolvido por Aluno. 
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
      gap: 40,
    },
    actions:{
      padding: 24,
      backgroundColor: '#14448080',
      width: '80%',
      borderRadius: 32,
      borderWidth: 2,
      borderColor: '#144480',
      gap: 32,
      
    },
    context: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

    },
    contextButtonActive: {
      backgroundColor: '#144480',
      borderRadius: 8,
    },
    contextButtonText: {
      fontSize: 12.5,
      color: '#FFF',
      padding: 8,
    },
    timer: {
      fontSize: 54,
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: "center",
    },
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
    footer: {
      width: '80%',
    },
    footerText: {
      color: '#98A0A8',
      fontSize: 12.5,
      textAlign: "center",
    }

  }
);