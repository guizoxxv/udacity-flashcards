import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render() {
    let { deck } = this.props.navigation.state.params

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginBottom:10}}>{deck.title}</Text>
          <Text style={{textAlign:'center', fontSize:20}}>{deck.cards.length} cards</Text>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-around'}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightpink'}]} onPress={() => this.props.navigation.navigate('AddCard', { deck: deck })}>
            <Text style={styles.btnTxt}>Add Card</Text>
          </TouchableOpacity>
          {deck.cards.length > 0 &&
            <TouchableOpacity style={[styles.btn, {backgroundColor:'lightblue'}]} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })}>
              <Text style={styles.btnTxt}>Start Quiz</Text>
            </TouchableOpacity>
          }
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

export default Deck