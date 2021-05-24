import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ModalDetail = (props: any) => {
  const {visible, Logout, item} = props;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FF000000',
        }}>
        <View style={Styles.container}>
          <ScrollView style={{height: hp(50), width: wp(90)}}>
            <Text style={Styles.name}>{item?.item?.name}</Text>
            <Image
              source={{uri: item?.item?.full_picture}}
              style={Styles.full_picture}
              resizeMode={'center'}
            />
            <Text style={Styles.message}>{item?.item?.message}</Text>

            <Text>{item?.item?.description}</Text>
          </ScrollView>
        </View>
        <TouchableOpacity onPress={Logout} style={Styles.btn_out}>
          <Text style={Styles.text_out}>Thoát</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: hp(50),
    width: wp(90),
    backgroundColor: '#FFFF',
    padding: wp(2),
    borderRadius: wp(2),
  },
  full_picture: {
    height: wp(50),
    width: '80%',
    alignSelf: 'center',
    marginVertical: wp(1),
  },
  name: {
    color: 'blue',
    fontSize: wp(5),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btn_out: {
    height: hp(7),
    width: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginVertical: hp(1),
  },
  text_out: {
    fontSize: wp(4.5),
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    fontSize: wp(4),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
