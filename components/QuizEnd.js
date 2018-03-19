import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class QuizEnd extends Component {
  render() {
    let { deck, score } = this.props.navigation.state.params
    let percentScore = (100 * score / deck.cards.length).toFixed(2)

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20, marginBottom:20}}>You completed deck {deck.title} quiz!</Text>
          <Text style={{fontSize:20, marginBottom:20}}>You answered {score} of {deck.cards.length} correctly</Text>
          <Text style={{fontSize:20}}>Progress: {percentScore}%</Text>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-around'}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgray'}]} onPress={() => this.props.navigation.navigate('Decks')}>
            <Text style={styles.btnTxt}>Go to home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightpink'}]} onPress={() => this.props.navigation.navigate('Quiz', { deck: deck })}>
            <Text style={styles.btnTxt}>Take quiz again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
});

export default QuizEnd