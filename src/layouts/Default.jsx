import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import PetsScreenHeader from '../components/layouts/Header';
import MedicationScreen from '../screens/Medication';
import VetScreen from '../screens/Vet';

import PetsScreen from '../screens/Pets';

const Tab = createBottomTabNavigator();

export default function DefaultLayout() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Pets" component={PetsScreen} options={{ headerTitle: PetsScreenHeader, tabBarIcon: ({ color, size }) => <Icon name='paw' color={color} size={size} /> }} />
                <Tab.Screen name="Medication" component={MedicationScreen} options={{ tabBarIcon: ({ color, size }) => <Icon name='pills' color={color} size={size} /> }} />
                <Tab.Screen name="Vet" component={VetScreen} options={{ tabBarIcon: ({ color, size }) => <Icon name='user-md' color={color} size={size} /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}