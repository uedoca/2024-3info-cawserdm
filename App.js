import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/nasvigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
