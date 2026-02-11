import { Image } from "expo-image";
// import { StyleSheet, Platform } from "react-native"

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function HomeDashboardScreen() {

    return(
        <ParallaxScrollView 
        headerBackgroundColor={{light:'#a1dcc7', dark: '#1D3D47'}} 
        headerImage={
            <Image
            source={require('@/assets/images/logo.svg')}
        
            />
        }>
            <ThemedView>
                <ThemedText></ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    )
} 