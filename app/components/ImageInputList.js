import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], OnRemoveImage, OnAddImage }) {
  const scrollView = useRef();
  
  return (
    <View>
      <ScrollView 
        horizontal 
        ref={scrollView} 
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map(uri => (
            <View key={uri} style={styles.image}>
              <ImageInput 
                imageUri={uri} 
                OnChangeImage={() => OnRemoveImage(uri)} 
              />
            </View>
          ))}
          <ImageInput OnChangeImage={(uri) => OnAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    marginRight: 10
  }
});

export default ImageInputList;