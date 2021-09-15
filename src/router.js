import React from "react";
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons';

import { Home } from '../src/Screens/Home';
import { Detail } from '../src/Screens/Detail';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
               />
               
               <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Feather 
                                name='shopping-cart'
                                size={24}
                                color='black'
                            />
                        </TouchableOpacity>
                    )
                }}
               />
           </Stack.Navigator>
       </NavigationContainer> 
    )
}

export default Routes;