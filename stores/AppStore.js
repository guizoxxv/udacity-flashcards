import { observable, action, computed } from 'mobx'

class AppStore {
  @observable decks = {}

  @action setDecks = (decks) => {
    this.decks = decks === null ? {} : decks
  }

  @action addDeck = (deck) => {
    this.decks[deck.title] = deck
  }

  @computed get decksCount() {
    return Object.keys(this.decks).length
  }
}

const store = new AppStore()

export default store