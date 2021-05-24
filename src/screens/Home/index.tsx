import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {profileAction} from '../../redux/accountFB/action';
import {Item_Post} from './modules/item_Post';
import {dateFormat} from '../../utils/dateFormatAgo';
import {ModalDetail} from './modules/modalDetail';
import {isEmpty} from 'lodash';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
const index = (props: any) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [Item, setItem] = useState<Object>({});
  const [isLoading, setLoading] = useState(false);
  const {allPosts, allAccesstoken} = useSelector((state: any) => ({
    allPosts: state.account.allPosts,
    allAccesstoken: state.account.allAccesstoken,
  }));
  const [dataMore, setdateMore] = useState<any[]>(allPosts?.data);
  const [pagingNext, setPagingNext] = useState<string>(allPosts?.paging?.next);
  useEffect(() => {
    dispatch(profileAction.getallPosts({acces_token: allAccesstoken}));
    setModalVisible(false);
  }, []);

  useEffect(() => {
    setdateMore(allPosts?.data);
    setPagingNext(allPosts?.paging?.next);
  }, [allPosts?.data]);

  const getData = async () => {
    fetch(pagingNext)
      .then(res => res.json())
      .then(resJson => {
        setPagingNext(resJson?.paging?.next);
        setdateMore(preState => preState?.concat(resJson?.data));
        setLoading(true);
      })
      .catch(err => {
        console.log(err?.messege);
      });
  };
  function onPressDetail(item: any) {
    setItem(item);
    setModalVisible(true);
  }
  const renderItem = (item: any) => {
    const {created_time, full_picture, from, message} = item.item;
    return (
      <Item_Post
        onPress={() => {
          onPressDetail(item);
        }}
        user_post={from?.name}
        created_time={dateFormat(
          moment(
            created_time?.replace('+0000', '+07:00'),
            'YYYY-MM-DDThh:mm:ssTZD',
          ).valueOf(),
        )}
        message={message}
        full_picture={
          isEmpty(full_picture)
            ? require('../../assets/images/noimage.png')
            : {uri: full_picture}
        }
      />
    );
  };

  const ListFooterComponent = () => {
    return isLoading ? (
      <ActivityIndicator size={'large'} color={'#FFFFFF'} />
    ) : null;
  };

  return (
    <View style={Styles.container}>
      <ModalDetail
        {...props}
        item={Item}
        visible={modalVisible}
        Logout={() => setModalVisible(false)}
      />
      <FlatList
        style={{width: '100%', backgroundColor: 'black'}}
        data={dataMore}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
        onEndReached={getData}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalDetail: {
    height: hp(50),
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
export default index;
