import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>
            <Text style={styles.labelInput}>Name</Text>
            <TextInput style={styles.Input}placeholder="Masukkan nama lengkap anda" />
            <Text style={styles.labelInput}>Username</Text>
            <TextInput style={styles.Input}placeholder="Masukkan username anda" />
            <Text style={styles.labelInput}>Email</Text>
            <TextInput style={styles.Input}placeholder="Masukkan email anda" />
            <Text style={styles.labelInput}>Address</Text>
            <TextInput style={styles.Input}placeholder="Masukkan alamat anda" />
            <Text style={styles.labelInput}>Phone Number</Text>
            <TextInput style={styles.Input}placeholder="Masukkan Nomor telepon anda" />
            <TouchableOpacity style={styles.button}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 25,
    },
    title: {
        fontSize: 42,
        fontWeight: '700',
    },
    labelInput: {
        fontSize: 20,
        fontWeight: '700',
    },
    Input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15,
        paddingLeft: 10,
        paddingVertical: 14,
    },
    button: {
        backgroundColor: '#C238CE',
        paddingVertical: 15,
    },
});

export default App;