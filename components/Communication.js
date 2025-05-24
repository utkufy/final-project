import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

const Communication = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
                });

                if (data.length > 0) {
                    setContacts(data);
                }
            }
        })();
    }, []);

    const handleCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleMessage = (phoneNumber) => {
        Linking.openURL(`sms:${phoneNumber}`);
    };

    const renderContact = ({ item }) => {
        const phoneNumber = item.phoneNumbers && item.phoneNumbers[0]?.number;
        return (
            <View>
                <Text>{item.name}</Text>
                {phoneNumber && (
                    <View>
                        <TouchableOpacity onPress={() => handleCall(phoneNumber)}>
                            <Text>Ara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleMessage(phoneNumber)}>
                            <Text>Mesaj</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View>
            {contacts.length > 0 ? (
                <FlatList
                    data={contacts}
                    renderItem={renderContact}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>Rehberde kayıtlı kişi bulunamadı.</Text>
            )}
        </View>
    );
};

export default Communication;