import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, PlantDetail } from '../screens'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const tabBarOptions = {
    showLabel: false,
    style:{
        height: "10%"
    }
};

const TabsScreen = () => (
    <Tab.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                const tintColor = focused ? COLORS.primary : COLORS.gray

                switch (route.name) {
                    case "home":
                        return (
                            <Image
                                source={icons.flash}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: tintColor
                                }}
                            />
                        );
                    case "box":
                        return (
                            <Image
                                source={icons.cube}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: tintColor
                                }}
                            />
                        );
                    case "camera":
                        return (
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: COLORS.primary
                                }}
                            >
                                <Image
                                    source={icons.camera}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </View>
                        );
                    case "search":
                        return (
                            <Image
                                source={icons.search}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: tintColor
                                }}
                            />
                        );
                    case "favourite":
                        return (
                            <Image
                                source={icons.heart}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: tintColor
                                }}
                            />
                        );
                }
            }
        })}
    >
        <Tab.Screen
            name='home'
            component={Home}
        />
        <Tab.Screen
            name='box'
            component={Home}
        />
        <Tab.Screen
            name='camera'
            component={Home}
        />
        <Tab.Screen
            name='search'
            component={Home}
        />
        <Tab.Screen
            name='favourite'
            component={Home}
        />
    </Tab.Navigator>
);

const StackScreen = () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='home'
    >
        <Stack.Screen
            name='home'
            component={TabsScreen}
        />
        <Stack.Screen
            name='plantDetail'
            component={PlantDetail}
        />
    </Stack.Navigator>
);

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
};

const Index = () => {
    return (
        <NavigationContainer theme={theme}>
            <StackScreen />
        </NavigationContainer>
    );
};

export default Index;
