import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
    const router = useRouter();
    const translateX = useRef(new Animated.Value(0)).current;
    const [fontsLoaded] = useFonts({
        'Inconsolata': require('../assets/fonts/Inconsolata.ttf'),
        'Iceberg': require('../assets/fonts/Iceberg-Regular.ttf'),
        'Hind': require('../assets/fonts/Hind-SemiBold.ttf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            const animate = () => {
                Animated.sequence([
                    Animated.timing(translateX, {
                        toValue: 20,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateX, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]).start(() => animate());
            };

            animate();
        }
    }, [translateX, fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/started.png')}
                style={styles.image}
            />
            <View style={styles.textContainerRow}>
                <Text style={styles.textWhite}>T</Text>
                <Text style={styles.textBlue}>II</Text>
                <Text style={styles.textWhite}>RA</Text>
            </View>
            <View style={styles.textContainerColumn}>
                <Image
                    source={require('../assets/pictures/Frame 61.png')}
                    style={styles.frame}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.introduceText}>Rent your dream car from the</Text>
                    <Text style={styles.introduceText}>Best Company</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.getStartedButton} onPress={() => { router.push('/login') }}>
                <Text style={styles.getStartedButtonText}>Get Started</Text>
                <Animated.View style={{ transform: [{ translateX }] }}>
                    <Image
                        source={require('../assets/pictures/ic_outline-navigate-next.png')}
                        style={styles.icon}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    frame: {
        width: 150,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    icon: {
        bottom: 2,
        width: 24,
        height: 24,
    },
    textContainerRow: {
        flexDirection: 'row',
        bottom: '30%',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWhite: {
        fontSize: 60,
        color: 'white',
        fontFamily: 'Iceberg',
    },
    textBlue: {
        fontSize: 60,
        color: '#2B4C59',
        fontFamily: 'Iceberg',
    },
    textContainerColumn: {
        flexDirection: 'column',
        top: '15%',
        alignItems: 'flex-start',
    },
    introduceText: {
        fontSize: 26,
        color: 'white',
        fontFamily: 'Hind',
    },
    getStartedButton: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 90,
        backgroundColor: 'rgba(198, 73, 73, 1)',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 50,
        alignItems: 'center',
    },
    getStartedButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Inconsolata',
    },
});

export default SplashScreen;
