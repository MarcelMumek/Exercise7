import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

const Button = ({label, onSubmit}) => {
    return (
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.labelButton}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF8C21',
        paddingVertical: 15,
        borderRadius: 10,
    },
    labelButton: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
    },
})
