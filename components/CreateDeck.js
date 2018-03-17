import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { inject, observer } from 'mobx-react'

@inject('AppStore')
@observer
class CreateDeck extends Component {
  state = {
    title: '',
  }

  submit = () => {
    let { decks } = this.props.AppStore

    let deck = {
      title: this.state.title,
      cards: []
    }

    this.props.AppStore.addDeck(deck)

    AsyncStorage.setItem('decks', JSON.stringify(decks)).then(() => {
      this.setState({
        title: ''
      })

      this.props.navigation.navigate('Deck', { deck: deck })
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
        <Text style={{fontSize:25, marginBottom:10}}>Insert deck title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Title"
          value={this.state.title}
          onChangeText={(text) => this.setState({title: text})}
        />
        <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgray'}]} onPress={this.submit}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
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
  },
  btnTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  }
})

export default CreateDeck