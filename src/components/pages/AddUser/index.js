import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import TextInput from '../../atoms/TextInput';
import Axios from 'axios';

const AddUser = () => {
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const handleSubmit = () => {
        const NewUser = {
            avatar: 'https://source.unsplash.com/random',
            first_name: first_name,
            last_name: last_name,
            email:  email,
        };
        Axios.post('http://10.0.2.2:3004/users', NewUser);
    }
    return (
        <ScrollView>
            <View>
                <Text>Add User</Text>
                <Gap height = {30} />
                <TextInput 
                    value = {email}
                    label = "email"
                    placeholder = "Masukkan Email Anda"
                    onChangeText = {event => setEmail(event)}
                />
                <Gap height = {30} />
                <TextInput 
                    value = {first_name}
                    label = "first name"
                    placeholder = "Masukkan Nama Depan Anda"
                    onChangeText = {event => setFirstName(event)}
                />
                <Gap height = {30} />
                <TextInput 
                    value = {last_name}
                    label = "last name"
                    placeholder = "Masukkan Nama Belakang Anda"
                    onChangeText = {event => setLastName(event)}
                />
                <Gap height = {30} />
                <Button label = 'Add User' onSubmit={handleSubmit}/>
            </View>
        </ScrollView>
    )
}

export default AddUser

const styles = StyleSheet.create({})

