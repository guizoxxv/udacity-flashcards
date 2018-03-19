import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'

class Quiz extends Component {
  state = {
    cardIndex: 0,
    showBack: false,
    score: 0
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
    this.value = 0

    this.animatedValue.addListener(({ value }) => {
      this.value = value
    })

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })

    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    })

    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    })
  }

  flipCard() {
    if(this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start()
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start()
    }

    this.setState({
      showBack: !this.state.showBack
    })
  }

  updateScore = (value) => {
      this.setState({
        score: this.state.score + value
      }, function() {
        if(this.state.cardIndex + 1 === this.props.navigation.state.params.deck.cards.length) {
          this.props.navigation.navigate('QuizEnd', {
            deck: this.props.navigation.state.params.deck,
            score: this.state.score
          })
        } else {
          this.setState({
            cardIndex: this.state.cardIndex + 1
          })

          this.flipCard()
        }
      })
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate }
      ]
    }

    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }

    let { deck } = this.props.navigation.state.params
    let { cardIndex, showBack, score } = this.state

    return (
      <View style={{flex:1, padding:10}}>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{deck.title}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Score: {score}</Text>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{cardIndex + 1} / {deck.cards.length}</Text>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>Question {cardIndex + 1}:</Text>
            <Text style={{fontSize:20, textAlign:'center'}}>{deck.cards[cardIndex].question}</Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, backAnimatedStyle, {opacity: this.backOpacity}]}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>Answer:</Text>
            <Text style={{fontSize:20, textAlign:'center'}}>{deck.cards[cardIndex].answer}</Text>
          </Animated.View>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems:'flex-end', justifyContent:'space-around'}}>
          {showBack === true &&
            <TouchableOpacity style={[styles.btn, {backgroundColor:'green'}]} onPress={() => this.updateScore(0)}>
              <Text style={styles.btnTxt}>Incorrect</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightblue'}]} onPress={() => this.flipCard()}>
            <Text style={styles.btnTxt}>View {showBack === false ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>
          {showBack === true &&
            <TouchableOpacity style={[styles.btn, {backgroundColor:'red'}]} onPress={() => this.updateScore(1)}>
              <Text style={styles.btnTxt}>Correct</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flipCard: {
    position: 'absolute',
    top: '50%',
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
});

export default Quiz