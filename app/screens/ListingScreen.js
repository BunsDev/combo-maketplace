import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen'
import Button from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingScreen({navigation}) {
  const { data: listing, error, loading, req: loadListings } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings(); 
  },[])

  return (
    <Screen style={styles.screen}>
      { error && <>
        <AppText>Couldn't retrieve the listings.</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}
      <ActivityIndicator animating={loading} />
        <FlatList 
          data={listing}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({item}) => 
            <Card 
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          }
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingScreen
