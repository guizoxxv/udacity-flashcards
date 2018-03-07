import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class NewDeck extends Component {
  state = {
    title: '',
  }

  submit = () => {
    alert('Opa!')
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:30, marginBottom:10}}>Insert deck title</Text>
        <TextInput
          style={styles.titleInput}
          placeholder='Title'
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.submit}>
          <Text style={{color:'white', fontSize:30}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleInput: {
    height: 100,
    alignSelf: 'stretch',
    fontSize: 30,
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 10
  },
  submitBtn: {
    backgroundColor: 'purple',
    height: 100,
    width: 300,
    marginTop: 50,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})