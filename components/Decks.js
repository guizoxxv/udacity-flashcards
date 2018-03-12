import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AsyncStorage } from 'react-native'

export default class Decks extends Component {
  state = {
    decks: {}
    // decks: {
    //   React: {
    //     title: 'React',
    //     questions: [
    //       {
    //         question: 'What is React?',
    //         answer: 'A library for managing user interfaces'
    //       },
    //       {
    //         question: 'Where do you make Ajax requests in React?',
    //         answer: 'The componentDidMount lifecycle event'
    //       }
    //     ]
    //   },
    //   JavaScript: {
    //     title: 'JavaScript',
    //     questions: [
    //       {
    //         question: 'What is a closure?',
    //         answer: 'The combination of a function and the lexical environment within which that function was declared.'
    //       }
    //     ]
    //   }
    // }
  }

  componentDidMount() {
    AsyncStorage.getItem('decks').then((decks) => {
      this.setState({
        decks: JSON.parse(decks)
      })
    })
  }

  render() {
    let decks = this.state.decks
    console.log(decks)

    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
          {Object.keys(decks).map((key) => (
            Object.keys(decks[key]).length === 0
            ?
              <Text key={key}>No decks available</Text>
            :
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