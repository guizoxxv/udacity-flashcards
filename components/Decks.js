import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Decks extends Component {
  // componentDidMount() {
  //
  // }

  state = {
    decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  render() {
    let decks = this.state.decks

    return (
      <View style={{flex:1, alignItems:'center', padding:10}}>
        {Object.keys(decks).map((key) => (
          <View key={key} style={styles.deck}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>{decks[key].title}</Text>
            <Text style={{textAlign:'center', fontSize:20, color:'gray'}}>{decks[key].questions.length} Questions</Text>
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    margin: 10,
    padding: 20,
    minWidth: 200,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  }
})

export default connect()(Decks)