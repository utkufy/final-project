import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';

const Sensors = () => {
    const [accelerometerData, setAccelerometerData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [gyroscopeData, setGyroscopeData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000); 
        const accelerometerSubscription = Accelerometer.addListener(data => {
            setAccelerometerData(data);
        });

        Gyroscope.setUpdateInterval(1000);
        const gyroscopeSubscription = Gyroscope.addListener(data => {
            setGyroscopeData(data);
        });

        return () => {
            accelerometerSubscription.remove();
            gyroscopeSubscription.remove();
        };
    }, []);

    return (
        <View>
            <Text>Accelerometer:</Text>
            <Text>x: {accelerometerData.x.toFixed(2)}</Text>
            <Text>y: {accelerometerData.y.toFixed(2)}</Text>
            <Text>z: {accelerometerData.z.toFixed(2)}</Text>

            <Text>Gyroscope:</Text>
            <Text>x: {gyroscopeData.x.toFixed(2)}</Text>
            <Text>y: {gyroscopeData.y.toFixed(2)}</Text>
            <Text>z: {gyroscopeData.z.toFixed(2)}</Text>
        </View>
    );
};

export default Sensors;