import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
const Stack = createNativeStackNavigator();
function BaseNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Signup"} component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { BaseNavigation };
