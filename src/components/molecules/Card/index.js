import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const Card = ({fullName, email, imageUrl}) => {
    return (
        <View>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: `${imageUrl}`}} />
            <View style={styles.cardWrapper}>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    cardWrapper: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
    },
    email: {
        fontSize: 16,
        color: 'grey',
    },
    image: {
        height: 100,
        width: 100,
        marginTop: 10,
        borderRadius: 100,
    },
})
