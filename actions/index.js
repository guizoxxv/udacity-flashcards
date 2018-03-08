export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const CREATE_DECK = 'CREATE_DECK'

export function receiveEntries(entries) {
  return {
    type: 'RECEIVE_ENTRIES',
    entries,
  }
}

export function addDeck(deckTitle) {
  return {
    type: 'CREATE_DECK',
    deckTitle,
  }
}