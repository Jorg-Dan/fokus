import { useState } from "react";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require('./foco.png'),
    display: "Foco",
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
    const timerRef = useRef(null) /*Precisamos informar o valor atual entre os ()*/ 

    /* Função reponsável por verificar o estado atual do timer(cronometro) 
    Se tiver acontecendo algo (current), você irá pausar.
    Se não tiver acontecendo algo (null), você irá começar.
    */ 
    const togglerTimer = () => { 
      if (timerRef.current) {
        return
      }

      

      /*timerRef -> current -> id/*



    }


 
  return (
    <View style={styles.container}>
     <Image source={timeType.image} />
@@ -52,82 +70,84 @@
          { new Date(timeType.initialValue * 1000).toLocaleTimeString("pt-br", {minute: "2-digit", second: "2-digit"}) }
        </Text> */}
        <Timer totalSeconds={timeType.initialValue}/>
        <FokusButton />
        <FokusButton 
          press={togglerTimer}
        />
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