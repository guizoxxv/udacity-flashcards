import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native'

export default class Deck extends Component {
  state = {
    deck: null
  }

  componentDidMount() {
    this.setState({
      deck: this.props.navigation.state.params.deck
    })
  }

  render() {
    let deck = this.state.deck
    console.log(deck)

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginBottom:10}}>Deck Title</Text>
          <Text style={{textAlign:'center', fontSize:20}}># cards</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around'}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightpink'}]}>
            <Text style={{fontSize:25, textAlign:'center'}}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgreen'}]}>
            <Text style={{fontSize:25, textAlign:'center'}}>Start Quiz</Text>
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
  }
})