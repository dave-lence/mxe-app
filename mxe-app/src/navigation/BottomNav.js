import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CardScreen from "../screens/CardScreen";
import SupportScreen from "../screens/SupporstScreen";
import { MaterialIcons } from "@expo/vector-icons";
import ColorTheme from "../theme/colorTheme";

const Tab = createBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ColorTheme.lightBlue2,
        tabBarStyle:{height:64, 
          ...Platform.select({
          ios:{
            shadowColor:ColorTheme.black,
            shadowOffset:{width:0, height:2},
            shadowOpacity:0.5,
            shadowRadius:2,
          },
          android:{
            elevation:10
          }
        }), paddingBottom: Platform.OS === 'android' ? 8  : 18}
      }}
      

    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { fontWeight: "bold" },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="CardScreen" component={CardScreen}  
        options={{
            tabBarLabel: "Card",
            tabBarLabelStyle: { fontWeight: "bold" },
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="credit-card" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="SupportScreen" component={SupportScreen} 
      
      options={{
        tabBarLabel: "Support",
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="help" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
