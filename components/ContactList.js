import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'said',
            status: 'making yr day fine',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',


        },
    ];
    return (
        <View>
            <Text>ContactList</Text>
        </View>
    )
}

const styles = StyleSheet.create({})