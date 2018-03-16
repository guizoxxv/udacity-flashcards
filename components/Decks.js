import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, AsyncStorage } from 'react-native'

export default class Decks extends Component {
  state = {
    decks: null
  }

  componentDidMount() {
    AsyncStorage.getItem('decks').then((decks) => {
      this.setState({
        decks: decks === null ? null : JSON.parse(decks)
      })
    })
  }

  clearDecks() {
    Alert.alert(
      'Confirm',
      'Clear all decks?',
      [
        {
          text: 'Cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            AsyncStorage.clear().then(this.setState({
              decks: null
            }))
          }
        },
      ]
    )
  }

  render() {
    let decks = this.state.decks

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightsalmon'}]} onPress={() => this.clearDecks()}>
            <Text style={styles.btnTxt}>Clear Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightblue'}]} onPress={() => this.props.navigation.navigate('CreateDeck')}>
            <Text style={styles.btnTxt}>Create Deck</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
          {decks === null
            ?
              <Text style={{fontSize:20}}>No decks available</Text>
            :
              Object.keys(decks).map((key) => (
                <TouchableOpacity key={key} style={styles.deck} onPress={() => this.props.navigation.navigate('Deck', { deck: decks[key].title })}>
                  <Text style={{fontSize:25, textAlign:'center'}}>{decks[key].title}</Text>
                </TouchableOpacity>
              ))
          }
        </View>
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