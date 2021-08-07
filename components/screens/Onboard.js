import React from 'react';
import { SafeAreaView, Text, View, StatusBar, Image, StyleSheet} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import colors from 'fxl/assets/colors/colors';
const data = [
  /*{
    image: require('./assets/images/Fxl.png'),
    bg: '#59b2ab',
  },*/
  {
    title: 'Welcome to FXL-Investment',
    text: 'Your guaranteed investment\npartners',
    image: require('fxl/assets/images/Onboard1.png'),
    bg: '#febe29',
  },
  {
    title: 'Invest with us',
    text: "Investing is simple\nand easy with us",
    image: require('fxl/assets/images/Onboard2.png'),
    bg: '#22bcb5',
  },
  {
    title: 'Easy withdrawal',
    text: "Easy, fast and guaranteed\nwithdrawal",
    image: require('fxl/assets/images/Onboard3.png'),
    bg: '#000000',
    
  },
];



const Onboard = (props) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source = {item.image} style={styles.image}/> 
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>  
    );  
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Done</Text>
      </View>
    )
  };
const renderNextButton = () => {
  return (
    <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Next</Text>
    </View>
  )
};
const renderSkipButton = () => {
  return (
    <View style={styles.leftTextWrapper}>
      <Text style={styles.leftText}>Skip</Text>
    </View>
  )
};

const handleDone = () => {
  props.handleDone();
};

  return (
    <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          showSkipButton
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
          onDone={handleDone}
        />
      </View>
  );
};

const styles = StyleSheet.create ({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 55,
    position: "absolute",
   left: 30,
   top: 300,
  },
  
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    width: 306,
    height: 28,
    top: -274,
    textAlign: "center",
    lineHeight: 28,
    
  },
  text: {
    fontSize: 12,
    color: colors.black,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    marginTop: -230,
    
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
rightText: {
  color: colors.blue,
  fontFamily: "Roboto-Regular",
  fontSize: 14,
},
leftTextWrapper: {
  width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
},
leftText: {
  color: colors.blue,
  fontFamily: "Roboto-Regular",
  fontSize: 14,
},
dotStyle: {
  backgroundColor: colors.grey,
},
activeDotStyle: {
  backgroundColor: colors.blue,
},
});

export default Onboard;