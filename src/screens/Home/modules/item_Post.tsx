import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isEmpty} from 'lodash';
export const Item_Post = (props: any) => {
  const {full_picture, user_post, created_time, message, onPress} = props;
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <View
        style={{
          width: '100%',
          marginHorizontal: '10%',
          marginVertical: wp(1),
          height: hp(7),
        }}>
        <Text style={Styles.user_post}>{user_post}</Text>
        <Text style={Styles.created_time}>{created_time}</Text>
      </View>

      <Text style={Styles.message} numberOfLines={2}>
        {message}
      </Text>

      <Image
        source={full_picture}
        style={Styles.full_picture}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: hp(0.5),
    backgroundColor: '#525252',
    borderRadius: wp(3),
    padding: wp(3),
  },
  full_picture: {
    height: wp(30),
    width: '100%',
    alignSelf: 'center',
    marginVertical: wp(1),
    // backgroundColor: 'red',
  },
  user_post: {
    fontSize: wp(4),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  created_time: {
    fontSize: wp(3),
    color: '#FFFFFF',
  },
  message: {
    fontSize: wp(3.5),
    color: '#FFFFFF',
    marginLeft: '4%',
    marginBottom: hp(1),
    // backgroundColor: 'pink',
  },
});
