import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { inject, observer } from 'mobx-react'

@inject('AppStore')
@observer
class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  submit = () => {
    AsyncStorage.setItem('decks', JSON.stringify(
      {
        cards: [
          {
            question: this.state.question,
            answer: this.state.answer
          }
        ]
      }
    )).then(() => {
      this.setState({
        question: '',
        answer: '',
      })

      this.props.AppStore.addDeck(deck)

      this.props.navigation.navigate('Decks', { deck: title })
    })
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
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
      </View>
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