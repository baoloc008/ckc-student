import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppData from '../../data.json';

const fakeApi = () => Promise.resolve(AppData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  itemContainer: {
    // backgroundColor: 'lightgreen',
    width: '45%',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    // margin: 10,
  },
  itemImage: {
    width: 75,
    height: 75,
  },
  itemText: {
    marginTop: 12,
  },
});

const HomeScreen = props => {
  const [appData, setAppData] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    fakeApi().then(resp => setAppData(resp));
  }, []);

  const handleOnPressItem = item => {
    navigation.push('webviewscreen', {uri: item.weburl});
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.itemContainer}
        onPress={() => handleOnPressItem(item)}>
        <Image source={{uri: item.itemicon}} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.itemtext}</Text>
      </TouchableOpacity>
    );
  };
  const webList = appData.map(item => renderItem(item));
  return (
    <View style={styles.container}>
      {/* <FlatList data={appData} renderItem={renderItem} numColumns={2} /> */}
      {webList}
    </View>
  );
};

export default HomeScreen;
