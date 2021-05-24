import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import {ButtonFacebook} from '../../components/buttonFacebook';
import {Colors} from '../../resources/color';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  LoginButton,
  AccessToken,
  Settings,
  LoginManager,
} from 'react-native-fbsdk';
import {profileAction} from '../../redux/accountFB/action';
import {Permissions} from '../../resources/arrrPermissions';
import lodash, {isEmpty} from 'lodash';
export const SplashScreen = (props: any) => {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const {allAccesstoken} = useSelector((state: any) => ({
    allAccesstoken: state.account.allAccesstoken,
  }));

  useEffect(() => {
    checkAccesstoken();
  }, []);

  const checkAccesstoken = () => {
    if (isEmpty(allAccesstoken)) {
      Alert.alert('No account user need to login');
    } else {
      props.navigation.navigate('index');
    }
  };

  const keyPermissions = Object.keys(Permissions);
  console.log('keyPermissions', keyPermissions);

  const loginFb = () => {
    LoginManager.logInWithPermissions(keyPermissions).then(value => {
      console.log('value', value);
      if (value.isCancelled) {
        console.log('login is cancelled.');
      } else {
        AccessToken.getCurrentAccessToken().then((data: any) => {
          console.log('data.accessToken', data);
          dispatch(profileAction.getToken(data.accessToken));
          props.navigation.navigate('index');
        });
      }
    });
  };
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={Styles.linearGradient}>
      <LinearTextGradient
        style={Styles.ACB}
        locations={[0, 1]}
        colors={['red', 'blue']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>ACB</Text>
      </LinearTextGradient>
      <Text style={Styles.content}>INFORMATION ACCOUNT FACEBOOK</Text>

      <ButtonFacebook onPress={loginFb} title={'Sign in with Facebook'} />
    </LinearGradient>
  );
};
const Styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ACB: {
    color: '#FFFFFF',
    fontSize: wp(10),
    fontWeight: 'bold',
  },
  content: {
    fontSize: wp(4),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
