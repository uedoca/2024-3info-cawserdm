import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { Image } from "expo-image";

export default function HomeScreen({}) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Inicial</Text>
      <Text>Bem vindo</Text>
      <Image 
        source={require('../../assets/icon.png')}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => navigation.navigate("SobreScreen")}
        title="Ir para sobre"
      />
    </View>
  );
}
