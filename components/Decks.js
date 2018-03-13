import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../actions'

class Decks extends Component {
  // state = {
  //   decks: {
  //     React: {
  //       title: 'React',
  //       questions: [
  //         {
  //           question: 'What is React?',
  //           answer: 'A library for managing user interfaces'
  //         },
  //         {
  //           question: 'Where do you make Ajax requests in React?',
  //           answer: 'The componentDidMount lifecycle event'
  //         }
  //       ]
  //     },
  //     JavaScript: {
  //       title: 'JavaScript',
  //       questions: [
  //         {
  //           question: 'What is a closure?',
  //           answer: 'The combination of a function and the lexical environment within which that function was declared.'
  //         }
  //       ]
  //     }
  //   }
  // }

  componentDidMount() {
    getDecks()
  }

  render() {
    let decks = this.props.decks
    console.log(decks)

    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
        <TouchableOpacity style={styles.createDeckBtn} onPress={() => this.props.navigation.navigate('CreateDeck')}>
          <Text style={{color:'white', fontSize:25}}>Create Deck</Text>
        </TouchableOpacity>

        {decks === undefined
          ?
            <Text style={{fontSize:20}}>No decks available</Text>
          :
            Object.keys(decks).map((key) => (
              <View key={key} style={styles.deck}>
                <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>{decks[key].title}</Text>
                // <Text style={{textAlign:'center', fontSize:20, color:'gray'}}>{decks[key].questions.length} Questions</Text>
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
  },
  createDeckBtn: {
    backgroundColor: 'lightblue',
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
})

const mapStateToProps = ({ decks }) => ({
  decks,
})

export default connect(mapStateToProps, { getDecks })(Decks)