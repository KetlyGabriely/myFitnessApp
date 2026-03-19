import { View, Text, StyleSheet, ActivityIndicator} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Splash(){

    useEffect(()=> {
        setTimeout(() => {
            router.replace("/(tabs)");
        }, 3000);
    }, []);

    return(
        <View style={styles.container}>
            <Text>Splash Screen</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});