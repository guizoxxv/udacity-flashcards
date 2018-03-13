import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { AsyncStorage } from 'react-native'

export default class CreateDeck extends Component {
  state = {
    title: '',
  }

  submit = () => {
    AsyncStorage.mergeItem('decks', JSON.stringify({
      [this.state.title]: {
        title: this.state.title
      }
    })).then(() => {
      this.props.navigation.navigate('Decks')
    })
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
        <Text style={{fontSize:25, marginBottom:10}}>Insert deck title</Text>
        <TextInput
          style={styles.titleInput}
          placeholder='Title'
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />
        <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgray'}]} onPress={this.submit}>
          <Text style={{color:'white', fontSize:25}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleInput: {
    height: 100,
    alignSelf: 'stretch',
    fontSize: 25,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  btn: {
    marginTop: 50,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})