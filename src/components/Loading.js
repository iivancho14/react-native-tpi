import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Loading = ({ sizeActivity, colorActivity }) => {
    const {
        container,
        horizontal
    } = styles;
  
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={sizeActivity} color={colorActivity}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 30
  }
})

export default Loading;