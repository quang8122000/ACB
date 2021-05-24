import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const AvartarProfile = (props: any) => {
  const {picture} = props;
  return (
    <TouchableOpacity style={Styles.container}>
      <Image resizeMode={'cover'} source={picture} style={Styles.img_profile} />
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_profile: {
    height: hp(10),
    width: '100%',
    borderRadius: wp(10),
  },
});
