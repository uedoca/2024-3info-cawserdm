import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function HomeScreen({}) {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Inicial</Text>
      <Text>Bem vindo</Text>
      <Button
        onPress={() => navigation.navigate("SobreScreen")}
        title="Ir para sobre"
      />
    </View>
  );
}
