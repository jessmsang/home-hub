import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout(){
    const colorScheme = useColorScheme();

    return (
        <Tabs 
            screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                    tabBarButton: HapticTab,
                  }}>
            <Tabs.Screen 
                name="home-dashboard"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}/>
            <Tabs.Screen
                name="calendar"
                options={{
                    title: "Calendar",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="lists"
                options={{
                    title: "Lists",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="list" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="groceries"
                options={{
                    title: "Groceries",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="cart" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="home-care"
                options={{
                    title: "HomeCare",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="construct" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}