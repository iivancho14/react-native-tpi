import React from 'react';
import {TouchableHighlight, Image, View } from 'react-native';

const Button = ({ onPress, imageUrl }) => {

  return (
    <TouchableHighlight onPress={onPress} style={styles.buttonStyle}>
        <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
    </TouchableHighlight>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 400
  }
};

export default Button;
