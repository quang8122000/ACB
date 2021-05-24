import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Index = () => {
  useEffect(() => {}, []);
  return (
    <View style={Styles.container}>
      <Text> Index</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
