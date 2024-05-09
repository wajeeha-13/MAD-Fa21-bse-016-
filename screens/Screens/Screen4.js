import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ThreeItemsInRow = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };



    const data = {
        labels: ['Fajr','Zuhr','Asr','Maghrib','Isha'],
        datasets: [
            {
                data: [0.1,0.4,0.8,1.2,1.6],
                colors: [
                    (opacity=1) => '#0000FF',
                    (opacity=1) => '#008000',
                    (opacity=1) => '#FFFF00',
                    (opacity=1) => '#FF0000',
                    (opacity=1) => '#800080',
                    
                ],
                
            },
        ],
    };

    const items = ['LAST 7 DAYS', 'MONTHLY', 'DATE RANGE'];

    return (
        <View>
            <Text style={styles.text}>PREVIOUS RECORD</Text>
            <View style={styles.container}>
                {items.map((item, index) => (
                    <TouchableHighlight
                        key={index}
                        style={[
                            styles.item,
                            hoveredIndex === index && styles.hoveredItem
                        ]}
                        onPress={() => { }}
                        underlayColor="blue"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Text style={[styles.itemText, hoveredIndex === index && styles.hoveredItemText]}>{item}</Text>
                    </TouchableHighlight>
                ))}
            </View>
            <View style={styles.containergraph}>
            <BarChart
                data={data}
                width={330}
                height={250}
                chartConfig={{
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#ffffff",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    strokeWidth: 2,
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false,
                }}
                withHorizontalLabels={true}
                withCustomBarColorFromData={true}
                flatColor={true}
                withInnerLines={false}
                showBarTops={false}
                fromZero={true}
            />
        </View>


            <View style={styles.container5}>
                <View style={styles.square1} />
                <Text >Fajar</Text>
                <View style={styles.square2} />
                <Text >Zuhr</Text>
                <View style={styles.square3} />
                <Text >Asr</Text>
                <View style={styles.square4} />
                <Text >Maghrib</Text>
                <View style={styles.square5} />
                <Text >Isha</Text>
            </View>
             <Text style={styles.lasttext}>You Offered 0 out 05 35</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30

    },
    containergraph: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:50,
    },
    container5:{
     flexDirection:'row',
     alignItems:'center',
     marginStart:40,
     marginEnd:40,
     justifyContent:'space-evenly',
     top:40,
     marginTop:270,
     
    },
    item: {
        width: 100,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.2,
    },
    hoveredItem: {
        backgroundColor: 'blue',
    },
    itemText: {
        color: 'gray',
    },
    hoveredItemText: {
        color: 'white',  
    },
    text: {
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
        color: '#4169E1',
    },

    square1: {
        width: 20,
        height: 20,
        backgroundColor: '#0000FF',
        marginRight: 10,
        borderRadius: 3,
      
    },
    square2: {
        width: 20,
        height: 20,
        backgroundColor: '#008000',
        marginRight: 10,
        borderRadius: 3,
        marginStart:10,

    },
    square3: {
        width: 20,
        height: 20,
        backgroundColor: '#FFA500',
        marginRight: 10,
        borderRadius: 3,
        marginStart:10,

    },
    square4: {
        width: 20,
        height: 20,
        backgroundColor: '#FF0000',
        marginRight: 10,
        borderRadius: 3,
        marginStart:10,


    },
    square5: {
        width: 20,
        height: 20,
        backgroundColor: '#800080',
        marginRight: 10,
        borderRadius: 3,
        marginStart:7,

        },
    lasttext:{
        fontSize:25,
        color:'black',
        marginTop:100,
        textAlign: 'center',
    },
    
});

export default ThreeItemsInRow;