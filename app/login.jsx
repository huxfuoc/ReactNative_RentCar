import React, { useState } from 'react';
import {
    View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fontsLoaded] = useFonts({
        'Imprima': require('../assets/fonts/Imprima-Regular.ttf'),
    });

    // const handleLogin = async () => {
    //     // Giả sử kiểm tra đăng nhập ở đây (có thể thêm logic kiểm tra từ server)
    //     if (username === 'user' && password === 'pass') {
    //         await AsyncStorage.setItem('isLoggedIn', 'true');
    //         router.push('/home');
    //     } else {
    //         alert('Tài khoản hoặc mật khẩu không đúng');
    //     }
    // };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
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
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <View style={styles.forgotPasswordContainer}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'transparent', height: 30, }]}
                            onPress={() => router.push('/register')}>
                            <Text style={[styles.buttonText, { fontSize: 11, color: 'rgba(0, 0, 0, 1)' }]}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'rgba(43, 76, 89, 1)', width: '100%', height: 50, }]}
                        onPress={() => router.push('/')}>
                        <Text style={[styles.buttonText, { fontSize: 20, color: 'white' }]}>Submit</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text>Don't have an account yet?</Text>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'transparent', height: 30, }]}
                            onPress={() => router.push('/register')}>
                            <Text style={[styles.buttonText, { fontSize: 13, color: 'rgba(252, 194, 27, 1)' }]}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
        marginHorizontal: 15,
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
        fontFamily: 'Roboto',
        color: '#fff',
        textAlign: 'center',
    },
});

export default LoginScreen;
