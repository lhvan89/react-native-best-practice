import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

import DashboardScreen from './src/components/dashboard/DashboardScreen';
import SearchScreen from './src/components/search/SearchScreen';
import LeaseScreen from './src/components/lease/LeaseScreen';
import MessagesScreen from './src/components/message/MessagesScreen';
import ProfileScreen from './src/components/profile/ProfileScreen';

const DashboardStack = createStackNavigator({
    Dashboard: { screen: DashboardScreen },
})
const SearchStack = createStackNavigator({
    Search: { screen: SearchScreen },
})
const LeaseStack = createStackNavigator({
    Lease: { screen: LeaseScreen },
})
const MessagesStack = createStackNavigator({
    Messages: { screen: MessagesScreen },
})
const ProfileStack = createStackNavigator({
    Profile: { screen: ProfileScreen },
})

export default createAppContainer(createBottomTabNavigator(
    {
        Dashboard: { screen: DashboardStack },
        Search: { screen: SearchStack },
        Lease: { screen: LeaseStack },
        Messages: { screen: MessagesStack },
        Profile: { screen: ProfileStack },
    },
    {
        defaultNavigationOptions: ({ navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const { routeName } = navigation.state;
                let sourceIcon;
                switch (routeName) {
                    case 'Dashboard':
                        sourceIcon = focused ? require('./src/assets/images/tabbar/dashboard-focus.png') : require('./src/assets/images/tabbar/dashboard.png');
                        break;
                    case 'Search':
                        sourceIcon = focused ? require('./src/assets/images/tabbar/search-focus.png') : require('./src/assets/images/tabbar/search.png');
                        break;
                    case 'Lease':
                        sourceIcon = focused ? require('./src/assets/images/tabbar/lease-focus.png') : require('./src/assets/images/tabbar/lease.png');
                        break;
                    case 'Messages':
                        sourceIcon = focused ? require('./src/assets/images/tabbar/messages-focus.png') : require('./src/assets/images/tabbar/messages.png');
                        break;
                    case 'Profile':
                        sourceIcon = focused ? require('./src/assets/images/tabbar/profile-focus.png') : require('./src/assets/images/tabbar/profile.png');
                        break;
                }
                return <Image source={sourceIcon}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#1eb786',
            inactiveTintColor: '#2d3236',
        },
    }
))