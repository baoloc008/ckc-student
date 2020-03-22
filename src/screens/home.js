import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  itemImage: {
    width: 75,
    height: 75,
  },
  itemText: {
    marginTop: 12,
  },
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 100,
    width: '100%',
  },
});

const HomeScreen = props => {
  const [appData, setAppData] = useState([]);
  const [isLoadingAppData, setIsLoadingAppData] = useState(true);
  const [haveError, setHaveError] = useState(false);
  const {navigation} = props;
  const [refreshing, setRefreshing] = React.useState(false);

  const handleLoadAppInfo = () => {
    return fetch(
      'https://api.github.com/gists/cafb8bba1457079952bcb25e766fbfdd',
    )
      .then(response => response.json())
      .then(responseJson => {
        setIsLoadingAppData(false);
        setAppData(JSON.parse(responseJson.files['ckc-student.json'].content));
      })
      .catch(() => setHaveError(true));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleLoadAppInfo().then(() => setRefreshing(false));
  }, [refreshing]);

  useEffect(() => {
    handleLoadAppInfo();
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

  const renderMainContent = () => {
    if (haveError) {
      return (
        <View style={styles.errorView}>
          <Text>Đã có lỗi xảy ra</Text>
        </View>
      );
    }
    if (isLoadingAppData) {
      return <ActivityIndicator size="large" style={styles.indicatorStyle} />;
    }
    const webList = appData.map(item => renderItem(item));

    return (
      <View style={{flex: 1}}>
        <Image
          source={{
            uri: 'http://ctct.caothang.edu.vn/templates/images/banner.png',
          }}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{webList}</View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {renderMainContent()}
    </ScrollView>
  );
};

export default HomeScreen;
