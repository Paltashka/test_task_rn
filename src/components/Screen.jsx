import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"

const Screen = ({
    children
}) => {
    return (
        <View
            style={styles.container}
        >
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 10
    },
});
  
export default Screen;