import React from 'react';
import {View, Text, Button, Dimensions, Image, StyleSheet, TouchableOpacity, LinearGradient} from 'react-native';
import colors from '../../assets/colors/colors';

const CreateAccountScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>Welcome!</Text>
            </View>
            <View style={styles.logo}>
            <Image source={require('fxl/assets/images/Login.png')} />
            </View>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('Button Clicked')}>
            <LinearGradient
            title ="Create Account"
            style={styles.signIn}
            >
              <Text style={styles.Text}>Create Account</Text>
            </LinearGradient>
            </TouchableOpacity>
            <Button
            title ="Login"
            style={styles.signIn}
            onPress={() => alert('Button Clicked')}
            />
            </View>
            
        </View>

    );
}; 

export default CreateAccountScreen;

const {height} = Dimensions.get("screen");
const height_logo =  height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontFamily: "Roboto-Bold",
        width: 107,
        position: 'absolute',
        height: 28,
        left: 20,
        top: 50,
        color: colors.blue,
      },
      footer: {
        position: "absolute",
        backgroundColor: '#fff',
        bottom: 140,
      },
      logo: {
        marginVertical: 55,
        position: "absolute",
       left: 30,
       top: 200,
      },
      title: {
        fontSize: 24,
        fontFamily: "Roboto-Medium",
        width: 107,
        position: 'absolute',
        height: 28,
        left: 30,
        top: 140,
        color: colors.blue,
        
      },
      text: {
        color: 'grey',
        marginTop: 5,
      },
      button: {
        alignItems: 'center',
        marginTop: 40,
        position: "absolute",
        backgroundColor: '#fff',
        bottom: 140,
      },
      signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
      },
      textSign: {
        color: 'white',
        fontWeight: 'bold',
      },
      
});

