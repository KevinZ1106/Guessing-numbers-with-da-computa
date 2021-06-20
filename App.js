import React, {useState} from 'react';
import { StyleSheet, View, } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

    const [gameNumber, setGameNumber] = useState();

    let content = 
        <StartGameScreen/>;

    if (gameNumber) {
        content = <GameScreen/>
    }

    let content = <StartGameScreen onGameStart={GameScreen} />;
    
    return (
        <View>
            <Header title='Guess Number' />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({});