
import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Platform, Text, Image, TouchableOpacity } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Rectangles = ({navigation, route}) => {
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);
    const [isChecked5, setChecked5] = useState(false);
    const [isChecked6, setChecked6] = useState(false);
    const [isChecked7, setChecked7] = useState(false);
    const [isChecked8, setChecked8] = useState(false);
    const [isChecked9, setChecked9] = useState(false);
    const [isChecked10, setChecked10] = useState(false);
    const [streakCount, setStreakCount] = useState(0);
    const {selectedDate } = route.params;

    useEffect(() => {
        if (selectedDate !== null) {
            // Save streak to local storage with selected date as key when streakCount changes
            AsyncStorage.setItem(selectedDate, streakCount.toString());
        }
    }, [streakCount, selectedDate]);

    

    const updateStreakCount = () => {
        const checkedCount = [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10].filter(checked => checked).length;
        if (checkedCount >= 5) {
            setStreakCount(1);
        } else {
            setStreakCount(0);
        }
    };

    useEffect(() => {
    updateStreakCount(streakCount);
  }, [streakCount, updateStreakCount]);

  useEffect(() => {
    const checkedCount = [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10].filter(checked => checked).length;
    if (checkedCount >= 5) {
      navigation.navigate('Screen3', { streakCount:1 });
    }
  }, [isChecked1, isChecked2, isChecked3, isChecked4, isChecked5, isChecked6, isChecked7, isChecked8, isChecked9, isChecked10, navigation]);



    const handleCheck1 = () => {
        if (!isChecked1 && !isChecked2) {
            setChecked1(true);
        } else {
            setChecked1(!isChecked1);
            setChecked2(false);
        }
    };

    const handleCheck2 = () => {
        if (!isChecked1 && !isChecked2) {
            setChecked2(true);
        } else {
            setChecked2(!isChecked2);
            setChecked1(false);
        }
    };

    const handleCheck3 = () => {
        if (!isChecked3 && !isChecked4) {
            setChecked3(true);
        } else {
            setChecked3(!isChecked3);
            setChecked4(false);
        }
    };

    const handleCheck4 = () => {
        if (!isChecked3 && !isChecked4) {
            setChecked4(true);
        } else {
            setChecked4(!isChecked4);
            setChecked3(false);
        }
    };
    const handleCheck5 = () => {
        if (!isChecked5 && !isChecked6) {
            setChecked5(true);
        } else {
            setChecked5(!isChecked5);
            setChecked6(false);
        }
    };
    const handleCheck6 = () => {
        if (!isChecked6 && !isChecked5) {
            setChecked6(true);
        } else {
            setChecked6(!isChecked6);
            setChecked5(false);
        }
    };
    const handleCheck7 = () => {
        if (!isChecked7 && !isChecked8) {
            setChecked7(true);
        } else {
            setChecked7(!isChecked7);
            setChecked8(false);
        }
    };
    const handleCheck8 = () => {
        if (!isChecked8 && !isChecked7) {
            setChecked8(true);
        } else {
            setChecked8(!isChecked8);
            setChecked7(false);
        }
    };
    const handleCheck9 = () => {
        if (!isChecked9 && !isChecked10) {
            setChecked9(true);
        } else {
            setChecked9(!isChecked9);
            setChecked10(false);
        }
    };
    const handleCheck10 = () => {
        if (!isChecked10 && !isChecked9) {
            setChecked10(true);
        } else {
            setChecked10(!isChecked10);
            setChecked9(false);
        }
    };
    return (
        <View style={styles.container}>

            {/* First Rectangle */}
            <View style={[styles.rectangle, styles.shadow]}>
                <Text style={styles.ArabicText}>فجر</Text>
                <Text style={styles.EnglishText}>Fajr</Text>
                <Checkbox
                    value={isChecked1}
                    onValueChange={handleCheck1}
                    style={styles.checkbox}
                    checkColor={isChecked1 ? 'blue' : '#FFF'}
                />
                <Image source={require('../assets/img1.jpeg')} style={styles.Image1} />
                <Checkbox
                    value={isChecked2}
                    onValueChange={handleCheck2}
                    style={styles.checkbox}
                    checkColor="#FFF"
                />
                <Image source={require('../assets/img2.jpeg')} style={styles.Image2} />
            </View>


            {/* Second Rectangle */}
            <View style={[styles.rectangle, styles.shadow]}>
                <Text style={styles.ArabicText}>ظہر</Text>
                <Text style={styles.EnglishText}>Zuhr</Text>
                <Checkbox
                    value={isChecked3}
                    onValueChange={handleCheck3}
                    style={styles.checkbox}
                    checkColor="#FFF"
                />
                <Image source={require('../assets/img1.jpeg')} style={styles.Image1} />
                <Checkbox
                    value={isChecked4}
                    onValueChange={handleCheck4}
                    style={styles.checkbox}
                    checkColor="#FFF"
                />
                <Image source={require('../assets/img2.jpeg')} style={styles.Image2} />
            </View>


            {/* third Rectangle */}
            <View style={[styles.rectangle, styles.shadow]}>
                <Text style={styles.ArabicText}>عصر</Text>
                <Text style={styles.EnglishText}>Asr</Text>
                <Checkbox
                    value={isChecked5}
                    onValueChange={handleCheck5}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img1.jpeg')} style={styles.Image1} />
                <Checkbox
                    value={isChecked6}
                    onValueChange={handleCheck6}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img2.jpeg')} style={styles.Image2} />
            </View>


            {/* fourth Rectangle */}
            <View style={[styles.rectangle, styles.shadow]}>
                <Text style={styles.ArabicText}>مغرب</Text>
                <Text style={styles.EnglishText}>Maghrib</Text>
                <Checkbox
                    value={isChecked7}
                    onValueChange={handleCheck7}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img1.jpeg')} style={styles.Image1} />
                <Checkbox
                    value={isChecked8}
                    onValueChange={handleCheck8}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img2.jpeg')} style={styles.Image2} />
            </View>

            {/* fifth Rectangle */}
            <View style={[styles.rectangle, styles.shadow]}>
                <Text style={styles.ArabicText}>عشاء</Text>
                <Text style={styles.EnglishText}>Isha</Text>
                <Checkbox
                    value={isChecked9}
                    onValueChange={handleCheck9}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img1.jpeg')} style={styles.Image1} />
                <Checkbox
                    value={isChecked10}
                    onValueChange={handleCheck10}
                    style={styles.checkbox}
                    checkColor="blue"
                />
                <Image source={require('../assets/img2.jpeg')} style={styles.Image2} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Screen3', { streakCount })}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Go to Screen 3</Text>
                </View>
            </TouchableOpacity>
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
    rectangle: {
        width: 330,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 15,
        borderBottomColor: 'gray',
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    checkbox: {
        marginHorizontal: 12,
    },
    ArabicTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
    },
    EnglishText: {
        marginTop: 50,
        fontSize: 15,
        marginStart:0,
        textAlign:'right'
    },
    ArabicText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    Image1: {
        width: 50,
        height: 60,
    },
    Image2: {
        width: 60,
        height: 60,
        marginRight:10,
    },
    button: {
        backgroundColor: '#00adf5',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default Rectangles;