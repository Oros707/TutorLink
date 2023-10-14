import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CountdownTimer({ duration, onComplete }) {
    const [seconds, setSeconds] = useState(duration);

    useEffect(() => {
        let timer;

        if (seconds > 0) {
        timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        } else {
        // Timer has completed, trigger onComplete function
        onComplete();
        }

        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, [seconds, onComplete]);

    // Calculate the percentage of time remaining for the circular progress bar
    const progress = (duration - seconds) / duration;

    return (
        <View style={styles.container}>
        <Text style={styles.timer}>{seconds} seconds</Text>
        <View style={styles.progressBar}>
            <View
            style={[
                styles.progressCircle,
                { transform: [{ rotate: `${progress * 360}deg` }] },
            ]}
            />
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    timer: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    progressBar: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressCircle: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 5,
        borderColor: 'white',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
    },
});
