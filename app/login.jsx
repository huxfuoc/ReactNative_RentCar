import React, { useState, useEffect, useRef } from 'react';
import {
    Animated, View, Text, TextInput, TouchableOpacity, StyleSheet, Image,
    TouchableWithoutFeedback, Keyboard, Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [fontsLoaded] = useFonts({
        'Imprima': require('../assets/fonts/Imprima-Regular.ttf'),
        'Inter': require('../assets/fonts/Inter-VariableFont_slnt,wght.ttf'),
    });

    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current;

    useEffect(() => {
        if (fontsLoaded) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300, // Thời gian hiệu ứng
                useNativeDriver: true,
            }).start();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign In</Text>
                    <Image
                        source={require('../assets/pictures/Frame 7.png')}
                        style={styles.frame}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.inputText}>USERNAME</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.inputText}>PASSWORD</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'transparent', height: 30, }]}
                            onPress={() => router.push('/register')}>
                            <Text style={[styles.buttonText, { fontSize: 11, color: 'rgba(0, 0, 0, 1)', fontWeight: '400' }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'rgba(43, 76, 89, 1)', width: '100%', height: 50, }]}
                        onPress={() => router.push('/')}>
                        <Text style={[styles.buttonText, { fontSize: 20, color: 'white', fontWeight: '700' }]}>Submit</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text style={[{ fontWeight: '300' }]}>Don't have an account yet?</Text>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'transparent', height: 30, }]}
                            onPress={() => router.push('/register')}>
                            <Text style={[styles.buttonText, { fontSize: 13, color: 'rgba(252, 194, 27, 1)', fontWeight: '700', fontStyle: 'italic' }]}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    titleContainer: {
        height: 230,
        paddingVertical: 58,
        paddingHorizontal: 15,
    },
    formContainer: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    signUpContainer: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forgotPasswordContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 48,
        marginBottom: 20,
        fontFamily: 'Imprima',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderBottomWidth: 2,
        borderColor: '#ccc',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(43, 76, 89, 1)',
        borderRadius: 10,
    },
    inputText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: 'rgba(43, 76, 89, 1)'
    },
    buttonText: {
        fontFamily: 'Inter',
        color: '#fff',
        textAlign: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 0,
    },
});

export default LoginScreen;
