import React, {Component} from 'react';
import {Button, Image, TextInput, ScrollView} from 'react-native';
import Title from './components/Title';

class App extends Component{
  state = {
    isShow: true,
  }

  render(){
    return (
      <ScrollView showVerticalScrollIndicator={false}>
      {this.state.isShow && <Title text="Welcome to Mobile Programming" />}
        <Button 
         title="Toggle Title"
         onPress={() => this.setState ({isShow: !this.state.isShow})}
        />
      <Image 
        style={{width: 100, height: 100}}
        source={require('./assets/Logo_Unklab.png')} />
      <Image 
        style={{width: 50, height: 50}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
      />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      <TextInput 
        placeholder="Input Username"
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          paddingLeft: 20,
          paddingVertical: 12,
          borderRadius: 10,
        }}
        />
      </ScrollView>
    );
  }
}

export default App;