import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../redux/bikeSlice';

const Item = ({ item, backgroundColor, onPress }) => (
  <TouchableOpacity style={[styles.item, { backgroundColor }]} onPress={onPress}>
    <Image source={{ uri: item.img }} style={{ width: 105, height: 100 }} />
    <Text>{item.title}</Text>
    <Text>$ {item.price}</Text>
  </TouchableOpacity>
);

function ListScreen({ navigation }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.items);
  const bikeStatus = useSelector((state) => state.bikes.status);
  const error = useSelector((state) => state.bikes.error);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    if (bikeStatus === 'idle') {
      dispatch(fetchBikes());
    }
  }, [bikeStatus, dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(fetchBikes()).finally(() => setRefreshing(false));
  };

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => navigation.navigate('Details', { item })}
      backgroundColor="rgba(247, 186, 131, 0.15)"
    />
  );

  if (bikeStatus === 'loading') {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  if (bikeStatus === 'failed') {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold', margin: 20 }}>
        The World's Best Bikes
      </Text>
      <TouchableOpacity
        style={{
          width: 80,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate('Add')}
      >
        <Text style={{ color: 'white' }}>Add</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <FlatList
          data={bikes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.flatListContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          scrollEnabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default ListScreen;
