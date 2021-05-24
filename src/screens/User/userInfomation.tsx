import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect, useDispatch, useSelector} from 'react-redux';
import {profileAction} from '../../redux/accountFB/action';
import {LoginButton} from 'react-native-fbsdk';
import {AvartarProfile} from './modules/avartarProfile';
import {ButtonFacebook} from '../../components/buttonFacebook';

import {Image_Cover} from './modules/image_Cover';

const UserInfomation = (props: any) => {
  const {allAccesstoken, allProfile} = useSelector((state: any) => ({
    allAccesstoken: state.account.allAccesstoken,
    allProfile: state.account.allProfile,
  }));
  const dispatch = useDispatch();

  console.log('props', props);

  useEffect(() => {
    dispatch(profileAction.getallProfiles({acces_token: allAccesstoken}));
  }, []);
  const logOut = () => {
    dispatch(profileAction.setToken({}));
    props.navigation.navigate('SplashScreen');
  };
  return (
    <View style={Styles.container}>
      <Image_Cover>
        <View style={Styles.view_avatar}>
          <AvartarProfile picture={require('../../assets/images/avatar.jpg')} />
        </View>
      </Image_Cover>
      <Text style={Styles.text_name}> {allProfile?.name}</Text>
      <Text> {allProfile?.email}</Text>
      <ButtonFacebook title={'Logout'} onPress={logOut} />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  text_name: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'black',
    marginTop: hp(5.5),
  },
  view_avatar: {
    position: 'absolute',
    alignItems: 'center',
    // backgroundColor: 'red',
    bottom: hp(-4.5),
  },
});

export default UserInfomation;
