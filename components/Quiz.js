import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'

class Quiz extends Component {
  state = {
    cardIndex: 1,
    showBack: false
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

    console.log(this.state.showBack)
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
    let { cardIndex, showBack } = this.state

    return (
      <View style={{flex:1, padding:10}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding:10}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{deck.title}</Text>
        <Text style={{fontSize:20, fontWeight:'bold'}}>{cardIndex} / {deck.cards.length}</Text>
      </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Animated.View style={[styles.flipCard, frontAnimatedStyle, {opacity: this.frontOpacity}]}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>
              Question: <Text style={{fontWeight:'normal'}}>{deck.cards[cardIndex - 1].question}</Text>
            </Text>
          </Animated.View>
          <Animated.View style={[styles.flipCard, backAnimatedStyle, {opacity: this.backOpacity}]}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center'}}>
              Answer: <Text style={{fontWeight:'normal'}}>{deck.cards[cardIndex - 1].answer}</Text>
            </Text>
          </Animated.View>
        </View>
        <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'space-around'}}>
          {showBack === true &&
            <TouchableOpacity style={[styles.btn, {backgroundColor:'lightgreen'}]}>
              <Text style={styles.btnTxt}>Incorrect</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.btn, {backgroundColor:'lightblue'}]} onPress={() => this.flipCard()}>
            <Text style={styles.btnTxt}>View {showBack === false ? 'Answer' : 'Question'}</Text>
          </TouchableOpacity>
          {showBack === true &&
            <TouchableOpacity style={[styles.btn, {backgroundColor:'lightsalmon'}]}>
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