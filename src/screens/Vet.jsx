import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function VetScreen() {
    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Text>Veterinarian</Text>
                <Icon name="user-md" size={164} color="#e22727"></Icon>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});