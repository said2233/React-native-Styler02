import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Said',
            status: 'making yr day fine',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',


        },

        {
            uid: 2,
            name: 'Hussein',
            status: 'making yr day fine',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',


        },
    ];
    return (
        <View style={styles.headingText}>
            <Text>ContactList</Text>
            <ScrollView style={styles.container}
                scrollEnabled={false}
            >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.userImage}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {},
    container: {},
    userCard: {},
    userImage: {},

})