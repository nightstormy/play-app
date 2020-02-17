import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './StartGameScreen'
import GameScreen from './GameScreen'
import GameOverScreen from './GameOverScreen'

class MasterNumberGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userNumber: '',
      guessRounds: 0
    }

    this.startGameHandler = this.startGameHandler.bind(this)
    this.gameOverHandler = this.gameOverHandler.bind(this)

  }

  startGameHandler = selectedNumber => {
    this.setState({
      userNumber: selectedNumber,
      guessRounds: 0,
    })
  }

  gameOverHandler = numOfRounds => {
    this.setState({
      guessRounds: numOfRounds
    })
  }

  newGameHandler = () => {
    this.setState({
      guessRounds: 0,
      userNumber: ''
    })
  }


  componentDidMount() {
  }

  render() {

    const { userNumber, guessRounds } = this.state

    let content = <StartGameScreen onStartGame={this.startGameHandler} />;

    if (userNumber && guessRounds <= 0) {
      content = <GameScreen userChoice={userNumber} onGameOver={this.gameOverHandler} onRestart={this.newGameHandler}/>
    } else if (guessRounds > 0) {
      content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={this.newGameHandler} />;
    }

    return (
      <View style={styles.screen}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default MasterNumberGame;
