import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    if (!location) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Marker
                coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                }}
                title="Konumunuz"
            />
        </MapView>
    );
};

export default Map;