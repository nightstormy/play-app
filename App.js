import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

class App extends Component {
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
      content = <GameScreen userChoice={userNumber} onGameOver={this.gameOverHandler} />
    } else if (guessRounds > 0) {
      content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={this.newGameHandler} />;
    }

    return (
      <View style={styles.screen}>
        <Header title={'Adivina el Numero!'} />
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

export default App;
