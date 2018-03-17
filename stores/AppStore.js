import { observable, action, computed } from 'mobx'

class AppStoreClass {
  @observable decks = []

  @action setDecks = (decks) => {
    this.decks = decks === null ? [] : decks
  }

  @action addDeck = (deck) => {
    this.decks.push(deck)
  }

  @action addCard = (index, card) => {
    this.decks[index].cards.push(card)
  }

  @computed get decksCount() {
    return this.decks.length
  }
}

const AppStore = new AppStoreClass()

export default AppStore