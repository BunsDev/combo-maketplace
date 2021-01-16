import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri, OnChangeImage}) {
  useEffect(() => {
    reqPermission();
  },[])

  const reqPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted) alert('You need to enable permission')
  }
  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete?', [
      { text: 'Yes', onPress: () => OnChangeImage(null) },
      { text: 'No' },
    ])
  }
  const selectImage = async () => {
    try{
      const rs = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if(!rs.cancelled) OnChangeImage(rs.uri);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        { !imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40}/> }
        { imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImageInput;