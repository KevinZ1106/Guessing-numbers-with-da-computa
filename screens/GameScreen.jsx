import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, Alert } from 'react-native';
import Card from '../components/Card';

const generateRandomNumber = (min, max, selectedNumber) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber == selectedNumber) {
        return generateRandomNumber(min, max, selectedNumber);
    }   else {
        return randomNumber;
    }
};

const GameScreen = (props) => {
    const [rememberLowest, setRememberLowest] = useState(0);
    const [remeberHighest, setRememberHighest] = useState(99);
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 99, props.selectedNumber));
    
    const validationAlert = () => {
        Alert.alert(
            'You Lied! or you need mental support'
            [
                {text: 'I wont do it next time', style: 'cancel'}
            ]
        );
    };

    const handleButtons = (directions) => {
        if(
            (directions === 'lower' && currentGuess < props.selectedNumber) || 
            (directions === 'greater' && currentGuess > props.selectedNumebr)
        ){
            validationAlert ()
        }
        else {
            generateRandomNumber(0, 99, props.selectedNumber);
        };
    
    };
    return (
        <View style={styles.GameScreen}>
            <Text>Opponent's Guess - {currentGuess}</Text>
            <Card style={styles.ButtonColour}>
            <Button title="Lower" onPress={() => handleButtons('lower')}/>
            <Button title="Greater" onPress={() => handleButtons('greater')}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({

    ButtonColour:{
        flexDirection: 'row',

    },

    GameScreen:{
        alignItems: 'center',
    }
});

export default GameScreen;
