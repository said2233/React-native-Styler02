import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={[styles.container]}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Mb</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>e</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>y</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>a</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>uni</Text>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingTop: 10
    },

    container: {
        padding: 8,
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardElevated: {
        backgroundColor: 'gray',
        elevation: 4
    },
})