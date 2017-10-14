import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import texts from '../config/texts';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>This is card {this.props.name}</Text>
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
  handleRat (card) {
    console.log("rat")
    console.log(card);
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

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {

      // Add fresh cards when user is running out
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        // console.log(`Adding ${Cards2.length} more cards`)

        // this.setState({
        //   cards: this.state.cards.concat(Cards2),
        //   outOfCards: true
        // })
      }

    }

  },
  render() {
    return (
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
    )
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
