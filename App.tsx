import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from './screens/products/products'
import InvoiceScreen from './screens/invoice/invoice'
import UploadScreen from './screens/upload/upload'
import LoginScreen from './screens/login/login'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} options={{
          title: 'Lista de Compras',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7c7ce9',
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
/>
      <Tab.Screen name="Upload" component={UploadScreen} options={{
          title: 'Lista de Compras',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7c7ce9',
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Tab.Screen name="Invoice" component={InvoiceScreen} options={{
          title: 'Comprovantes',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7c7ce9',
            alignItems: 'center',
            justifyContent: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}