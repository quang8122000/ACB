import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Image_Cover = (props: any) => {
  return (
    <ImageBackground
      imageStyle={{borderRadius: wp(2), opacity: 0.9}}
      resizeMode={'cover'}
      source={require('../../../assets/images/image_cover.jpg')}
      style={Styles.container}>
      {props.children}
    </ImageBackground>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: hp(30),
    width: wp(95),
    marginTop: hp(1),
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
});
