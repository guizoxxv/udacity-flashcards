import { AsyncStorage } from 'react-native'

export function saveDeckTitle ({ title }) {
  return AsyncStorage.mergeItem('flashcards', JSON.stringify({
    [title]: {},
  }))
}

export function addCardToDeck ({ card, title }) {
  return AsyncStorage.mergeItem('flashcards', JSON.stringify({
    [title]: card
  }))
}