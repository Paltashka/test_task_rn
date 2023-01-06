import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    LoginScreen,
    DisclaimerScreen,
    SalesScreen,
    SelectStationScreen
} from '../screens';

const Stack = createNativeStackNavigator();

const NavigationManager = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Disclaimer" component={DisclaimerScreen} />
                <Stack.Screen name="Sales" component={SalesScreen} />
                <Stack.Screen name="SelectStation" component={SelectStationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationManager;