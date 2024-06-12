import React, { act } from "react";
import { Alert, Button } from 'react-native';


export const MyButton = ({ type, action }) => {
    return (
        <Button
            title={type}
            onPress={action}
        />
    );
};

export const randomNumber = (min, max) => {
    console.log('Mínimo:', min, 'Máximo:', max);
    return Math.floor(Math.random() * (max - min)) + min;
};

export const succeeded = () => {
    Alert.alert(
        'Success',
        'Task completed successfully!',
        [
            {
                text: 'OK',
                onPress: () => {
                    return true;
                },
            },
        ],
        { cancelable: false }
    );
};