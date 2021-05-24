import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
export const ButtonFacebook = (props: any) => {
  const {onPress, title} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={Styles.linearGradient}>
        <Text style={Styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  linearGradient: {
    borderRadius: wp(2),
    width: wp(45),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  buttonText: {
    fontSize: wp(3),
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: wp(2),
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
