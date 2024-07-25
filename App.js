import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigaiton';
import { Provider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
            <NavigationContainer>
              <BottomTabNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    </Provider>
  );
}

