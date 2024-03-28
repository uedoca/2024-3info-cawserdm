import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../config/styles";
<<<<<<< HEAD
 
=======

>>>>>>> 4c483b84913c195c6c104f7b21cb6cd63f462d8b
/**
 *
 * LOGICA SIMPLES
 * - ENTREI NESSA TELA
 * - OPA! PRECISO BUSCAR A TEMPERATURA
 * - COMO? QUEM É O CARA QUE EXECUTA QUANDO ENTRA?
 * - LEMBREI É O U... COM [] VAZIO
 * -
 */
const API = "58f0cf79195fef97df91af42c5973568";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Joinville&appid=${API}&units=metric`;
<<<<<<< HEAD
 
export default function TempoScreenAula() {
  const [temperatura, setTemperatura] = useState("");
  const [icone, setIcone] = useState("");
  const [cidade, setCidade] = useState("Joinville");
 
=======

export default function TempoScreenAula() {
  const [temperatura, setTemperatura] = useState("");
  const [icone, setIcone] = useState("");

>>>>>>> 4c483b84913c195c6c104f7b21cb6cd63f462d8b
  const fetchTempo = async () => {
    // vou lá buscar o JSON na internet
    const resposta = await fetch(URL);
    // recebo essa informação e converto ela em programação que é JSON
    const data = await resposta.json();
    console.log(resposta); // formato texto
    console.log(data); // já está convertido pra JSON
    setTemperatura(data);
    setIcone(data.weather[0].icon);
  };
<<<<<<< HEAD
 
=======

>>>>>>> 4c483b84913c195c6c104f7b21cb6cd63f462d8b
  useEffect(() => {
    fetchTempo();
  }, []);
  // array vazio no final de useEffect simula simboliza
  // que a função será executada apenas uma vez, quando o componente for montado
<<<<<<< HEAD
 
=======

>>>>>>> 4c483b84913c195c6c104f7b21cb6cd63f462d8b
  return (
    <View style={styles.container}>
      {icone && (
        <>
          <Text
            variant="displayMedium"
            style={{ textAlign: "center", marginVertical: 10 }}
          >
            Temperatura em Joinville
          </Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${icone}@2x.png`,
            }}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              borderRadius: 200,
            }}
          />
        </>
      )}
      <Text variant="headlineSmall">Informações</Text>
      <Text>Temperatura atual: {temperatura?.main?.temp}</Text>
      <Text>Temperatura Máxima: {temperatura?.main?.temp_max}</Text>
      <Text>Temperatura Minima: {temperatura?.main?.temp_min}</Text>
    </View>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4c483b84913c195c6c104f7b21cb6cd63f462d8b
