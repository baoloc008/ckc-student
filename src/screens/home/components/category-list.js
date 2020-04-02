import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ImageResource from '../../../assets';
import CategoryItem from './category-item';

const styles = StyleSheet.create({
  container: {
    marginTop: 19,
    marginLeft: 40,
  },
});

const data = [
  {
    id: '1',
    icon: ImageResource.airConditioner1,
    text: 'Air Conditioner',
  },
  {
    id: '2',
    icon: ImageResource.lightBulbOn,
    text: 'Smart Light',
  },
  {
    id: '3',
    icon: ImageResource.kitchen1,
    text: 'Refrigerator',
  },
  {
    id: '4',
    icon: ImageResource.airConditioner1,
    text: 'Air Conditioner',
  },
  {
    id: '5',
    icon: ImageResource.lightBulbOn,
    text: 'Smart Light',
  },
  {
    id: '6',
    icon: ImageResource.kitchen1,
    text: 'Refrigerator',
  },
];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <CategoryItem {...item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{width: 20}} />}
      />
    </View>
  );
};

export default CategoryList;
