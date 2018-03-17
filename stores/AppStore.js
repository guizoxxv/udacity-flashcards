import { observable, action, computed } from 'mobx'

class AppStore {
  @observable decks = []

  @action setDecks = (decks) => {
    this.decks = decks === null ? [] : decks
  }

  @action addDeck = (deck) => {
    this.decks.push(deck)
  }

  @computed get decksCount() {
    return this.decks.length
  }
}

const store = new AppStore()

export default store