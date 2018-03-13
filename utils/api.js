import { AsyncStorage } from 'react-native'

export function getDecks() {
  return AsyncStorage.getItem('flashcards').then(decks => JSON.parse(decks))
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem('flashcards', JSON.stringify({
    [deck]: {
      title: deck
    },
  }))
}