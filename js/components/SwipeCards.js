import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import texts from '../config/texts';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} defaultSource={require('../../resources/images/loading.gif') }/>
      </View>
    )
  }
})

let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>{texts.outOfCards}</Text>
      </View>
    )
  }
})

export default React.createClass({
  getInitialState() {
    return {
      cards: this.createVoteSubjectCards(this.props.voteSubjects),
      outOfCards: false
    }
  },
  createVoteSubjectCards(voteSubjects) {
    return voteSubjects.map(voteSubject => {
      return {
        name: voteSubject.name,
        image: voteSubject.imgUrl,
        userId: voteSubject.userId
      }
    })
  },
  handleRatControlPressed () {
    console.log("Pressed Rat")
  },
  handlePigControlPressed () {
    console.log("Pressed Pig")
  },
  handleRat (card) {
    console.log("rat")
    this.props.handleEvent({
      type: this.props.events.vote,
      value: {
        subjectId: card.userId,
        vote: 'RAT'
      }
    })
  },
  handlePig (card) {
    console.log("pig")
    this.props.handleEvent({
      type: this.props.events.vote,
      value: {
        subjectId: card.userId,
        vote: 'PIG'
      }
    })
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 4

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {

      // Add fresh cards when user is running out
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
      this.props.handleEvent({
        type: this.props.events.refreshVoteSubjects
      })
    }

  },
  render() {
    return (
      <View>
        <SwipeCards
          cards={this.state.cards}
          loop={false}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={false}
          showNope={false}

          handleYup={this.handleRat}
          handleNope={this.handlePig}
          cardRemoved={this.cardRemoved}
        />

        <View style={{
          height: 90,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Image
            source={require('../../resources/images/pig.png')}
            style={{
              width: 78,
              height: 78,
              marginLeft: 40,
            }}
            onPress={this.handleRatControlPressed}
          />

          <Image
            source={require('../../resources/images/rat.png')}
            style={{
              width: 78,
              height: 78,
              marginRight: 40,
            }}
            onPress={this.handlePigControlPressed}
          />
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    marginTop: 20,
    marginBottom: 20
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  noMoreCards: {
    flex: 1,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
