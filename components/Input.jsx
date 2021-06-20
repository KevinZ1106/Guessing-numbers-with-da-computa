import React from 'react';
import { TextInput, StyleSheet,} from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.TextInput, ...props.style}}/>
    );


};

const styles = StyleSheet.create({
    TextInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    },
});

export default Input;