import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>

            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        what's new in javascript 21 -ES12
                    </Text>
                </View>
                <Image
                    source={{ uri: 'asset:/para.jpg' }} style={styles.cardImage}
                />

                <View style={styles.bodyContainer}>
                    <Text numberOfLines={2}>
                        what's new in javascript 21 -ES12
                        what's new in javascript 21 -ES12
                        what's new in javascript 21 -ES12
                        what's new in javascript 21 -ES12
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://said2233.github.io/MUSTBOT/')}
                    >
                        <Text style={styles.socialLinks}>Read more</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openWebsite('https://said2233.github.io/my_website/')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },

    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },

    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },

    cardImage: {
        height: 190,

    },

    bodyContainer: {
        padding: 10,
    },

    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    }

})