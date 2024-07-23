import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "./src/screens/HomeScreen";

export default function App() {
  return (
      <SafeAreaProvider>
             <HomeScreen/>
            <NavigationContainer></NavigationContainer>
      </SafeAreaProvider>
  );
}


