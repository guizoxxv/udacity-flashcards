import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'

export default class Deck extends Component {
  state = {
    deck: null
  }

  componentDidMount() {
    AsyncStorage.getItem('decks').then((decks) => {

      this.setState({
        deck: JSON.parse(decks)[this.props.navigation.state.params.deck]
      })
    })
  }

  render() {
    let deck = this.state.deck

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginBottom:10}}>{deck && deck.title}</Text>
          <Text style={{textAlign:'center', fontSize:20}}>{deck && deck.cards !== undefined ? deck.cards.length : 0} cards</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around'}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightpink'}]} onPress={() => this.props.navigation.navigate('AddCard', { deck: deck && deck.title })}>
            <Text style={styles.btnTxt}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgreen'}]}>
            <Text style={styles.btnTxt}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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