import React, {useState, useEffect}  from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Button from '../../atoms/Button';
import Axios from 'axios';

const HomeScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //Fetch
        //fetch('https://reqres.in/api/users')
        // .then(res => res.json())
        // .then(json => setUsers(json.data));
        //Axios
        Axios.get('http://10.0.2.2:3004/users').then(res =>
          setUsers(res.data)
        );
    }, [users]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    users.map(item => (
                        <Card
                         key={item.id}
                         fullName={`${item.first_name} ${item.last_name}`}
                         email={item.email}
                         imageUrl={item.avatar}
                        />
                    ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
    },
});
