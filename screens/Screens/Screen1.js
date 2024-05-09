import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = ({ navigation }) => {
    const handleDatePress = (date) => {
        // Navigate to Screen2.js with the selected date
        navigation.navigate('Screen2', { selectedDate: date });
    };



    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Salah Tracker</Text>
            <Calendar
                onDayPress={(day) => handleDatePress(day.dateString)}
                markedDates={{
                    '2023-06-25': { selected: true, marked: true },
                    '2023-06-24': { marked: true },
                    '2023-06-26': {
                        marked: true,
                        dotColor: 'black',
                        activeOpacity: 0
                    },
                }}
                theme={{
                    backgroundColor: '#ffffff', // Set the same color for background and calendarBackground
                    calendarBackground: '#ffffff', // Set the same color for background and calendarBackground
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: '#00adf5',
                    monthTextColor: '#00adf5',
                    indicatorColor: 'blue',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
                style={styles.calendar} // Apply custom styles here
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
        marginBottom:50,
    },
    calendar: {
        width: '80%', 
        aspectRatio: 1, 
        borderRadius: 30,
    },
    text: {
        color: '#00adf5',
        fontSize: 20,
        marginBottom: 20,
    }
});

export default MyCalendar;
