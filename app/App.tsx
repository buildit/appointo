import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';


import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';


const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{title: 'Login'}}
                />
               
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{title: 'Sign Up'}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
