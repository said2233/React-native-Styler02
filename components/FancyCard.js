import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./para.jpg')}
                    style={styles.cardImage}
                />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Maparachichi</Text>
                    <Text style={styles.cardLabel}>Mbeya city.</Text>
                    <Text style={styles.cardLabel}>Mbeya city.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {

    },

    card: {},

    cardElevated: {},

    cardImage: {
        height: 100
    },

    cardBody: {}
})