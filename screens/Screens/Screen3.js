import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import Rectangles from './Screen2';


const StreakScreen = ({ route,navigation}) => {
    const {streakCount}=route.params;


    const handlePress = () => {
        // Define the logic for handling the press event here
        navigation.navigate('Screen4');
      };
      

    return (
        <View style={styles.container}>
            <Text style={styles.streak1}>Streak</Text>
            <View style={[styles.circle, styles.shadow]}>

                <TouchableOpacity style={[styles.circleButton, styles.shadow]} onPress={handlePress}>
                    <Text style={styles.streakText}>Streak</Text>
                    <Text style={styles.streakCount}>{streakCount}</Text>
                </TouchableOpacity>


            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    circle: {
        width: 250,
        height: 250,
        borderRadius: 150,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 210,
        borderColor: 'gray',
        borderWidth: 0.2,
    },
    circleButton: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.2,

    },
    shadow: Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 1,
            shadowRadius: 5,

        },
        android: {
            elevation: 9,
        },
    }),
    streakText: {
        marginBottom: 20,
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold'
    },
    streakCount: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
    },
    streak1: {
        marginTop: 0,
        marginBottom: 100,
        color: '#00adf5',
        fontSize: 25,
    }
});

export default StreakScreen;