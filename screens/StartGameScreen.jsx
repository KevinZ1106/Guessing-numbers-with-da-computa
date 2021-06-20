import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import GameScreen from './GameScreen';

const StartGameScreen = () => {
    const minValue = 1;
    const maxValue = 99;
    const [cleanedValue, setCleanedValue] = useState('');
    const [isConfirmed, setIsConfirmed,] = useState(false);
    const [selectedNumber, setSavedNumber] = useState(0);

    const KeyboardDismiss = () => {
        Keyboard.dismiss()
    };

    const handleUserInputChange = (inputValue) => {
        setCleanedValue(inputValue.replace(/[^0-9]/g, ''));
    };

    const handleButtonReset = () => {
        setCleanedValue('');
        setIsConfirmed(false);
        setSavedNumber(0);
    };

    const handleButtonConfirm = () => {
        const value = parseInt(cleanedValue);
        if (isNaN(value) || value < minValue || value > maxValue) {
            Alert.alert(
                'The number is invalid.',
                `number must be between ${minValue} and ${maxValue}`,
            );
        }

        setIsConfirmed(true);
        setSavedNumber(value);
        setCleanedValue('');
    };

    let confirmOutput;

    if (isConfirmed) {
        confirmOutput = (
            <Card style={styles.summaryConatainer}>
                <Text>You have chosen</Text>
                    <Text style={styles.selectedNumber}>{selectedNumber}</Text>
                    <Button title = 'Start Game' onPress={(props) => {onGameStart}}></Button>
            </Card>
        );
    }

    let startGameContent = (
        <TouchableWithoutFeedback onPress={KeyboardDismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card>
                    <Text>Select a number</Text>
                    <Input
                        maxLength={2}
                        keyboardType="number-pad"
                        blurOnSubmit={true}
                        onChangeText={handleUserInputChange}
                        value={cleanedValue}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Reset' onPress={handleButtonReset} color='red'>Reset</Button>
                        <Button title='Confirm' onPress={handleButtonConfirm} color='green'></Button>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    );

    return startGameContent;
};

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    summaryConatainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    selectedNumber: {
        padding: 10,
        marginRadius: 10,
    },
});

export default StartGameScreen;