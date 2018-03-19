import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { inject, observer } from 'mobx-react'

@inject('AppStore')
@observer
class Decks extends Component {
  componentDidMount() {
    AsyncStorage.getItem('decks').then((decks) => {
      this.props.AppStore.setDecks(JSON.parse(decks))
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
            AsyncStorage.clear().then(() => {
              this.props.AppStore.setDecks(null)
            })
          }
        },
      ]
    )
  }

  consoleDecks() {
    console.log(this.props.AppStore.decks)
  }

  render() {
    let { AppStore } = this.props

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'red', margin:10}]} onPress={() => this.clearDecks()}>
            <Text style={styles.btnTxt}>Clear Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgray', margin:10}]} onPress={() => this.consoleDecks()}>
            <Text style={styles.btnTxt}>Console Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightblue', margin:10}]} onPress={() => this.props.navigation.navigate('CreateDeck')}>
            <Text style={styles.btnTxt}>Create Deck</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:10}}>
          {AppStore.decksCount === 0
            ?
              <Text style={{fontSize:20}}>No decks available</Text>
            :
              AppStore.decks.map((deck) => (
                <TouchableOpacity key={deck.title} style={styles.deck} onPress={() => this.props.navigation.navigate('Deck', { deck: deck })}>
                  <Text style={{fontSize:25, textAlign:'center'}}>{deck.title}</Text>
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

export default Decks