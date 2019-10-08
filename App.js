/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const handlePress = () => {
  ImagePicker.showImagePicker(
    {
      noData: true,
      mediaType: 'photo',
      takePhotoButtonTitle: 'Take a photo',
      title: 'Select a photo',
      photoQuality: 1,
    },
    res => {
      if (res.didCancel) {
        console.log('Cancelled');
      } else if (res.error) {
        console.log('Cancelled');
      } else {
        console.log('YAY, image available');
      }
    },
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Open Image Picker</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 250,
    backgroundColor: '#34495e',
    borderRadius: 25,
  },
  buttonText: {
    color: '#ecf0f1',
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
