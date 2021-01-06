import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], OnRemoveImage, OnAddImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map(uri => (
        <ImageInput 
          key={uri} 
          imageUri={uri} 
          OnChangeImage={() => OnRemoveImage(uri)} 
        />
      ))}
      <ImageInput OnChangeImage={(uri) => OnAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export default ImageInputList;