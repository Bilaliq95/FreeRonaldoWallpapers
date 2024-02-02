import {Platform, StyleSheet, View} from 'react-native';
import {RecoilRoot} from 'recoil';
import Screen1 from './views/Screen1';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Screen2 from './views/Screen2';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import About from './views/About';
import Favourites from './views/Favourites';
import Ratings from './views/Ratings';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={{backgroundColor: 'dodgerblue'}} {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="S1"
        component={Screen1}
        options={{
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'HOME',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="S2"
        component={Screen2}
        options={{
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: 'VIEW',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="S1"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            options={{
              title: 'HOME',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },

              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Home"
            component={Screen1}
          />
          <Drawer.Screen
            name="View"
            component={Screen2}
            options={{
              title: 'VIEW',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },

              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerItemStyle: {display: 'none'},
              headerLeft: () => null,
            }}
          />
          <Drawer.Screen
            options={{
              title: 'FAVOURITES',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },

              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Favourites"
            component={Favourites}
          />
          <Drawer.Screen
            options={{
              title: 'ABOUT',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },

              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="About"
            component={About}
          />
          <Drawer.Screen
            options={{
              title: 'RATINGS',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'dodgerblue',
              },

              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Ratings"
            component={Ratings}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
