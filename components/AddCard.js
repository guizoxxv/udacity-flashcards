import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, KeyboardAvoidingView } from 'react-native'
import { inject, observer } from 'mobx-react'


@inject('AppStore')
@observer
class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    let { deck } = this.props.navigation.state.params
    let { decks } = this.props.AppStore
    let index = decks.findIndex(function(e) {
      return e.title == deck.title
    })

    let card = {
      question: this.state.question,
      answer: this.state.answer,
    }

    this.props.AppStore.addCard(index, card)

    AsyncStorage.setItem('decks', JSON.stringify(decks)).then(() => {
      this.setState({
        question: '',
        answer: ''
      })

      this.props.navigation.navigate('Deck', { deck: this.props.AppStore.decks[index] })
    })
  }

  render() {
    let { deck } = this.props.navigation.state.params

    return (
      <KeyboardAvoidingView behavior='padding' style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginBottom:10}}>{deck.title}</Text>
          <Text style={{textAlign:'center', fontSize:20}}>{deck.cards.length} cards</Text>
        </View>
        <Text style={{fontSize:25, marginBottom:10}}>Insert card question</Text>
        <TextInput
          style={[styles.textInput, {marginBottom:20}]}
          placeholder="Question"
          value={this.state.title}
          onChangeText={(text) => this.setState({question: text})}
        />
        <Text style={{fontSize:25, marginBottom:10}}>Insert card answer</Text>
        <TextInput
          style={[styles.textInput, {marginBottom:20}]}
          placeholder="Answer"
          value={this.state.title}
          onChangeText={(text) => this.setState({answer: text})}
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
    fontSize: 25,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
  btn: {
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnTxt: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  }
})

export default AddCard