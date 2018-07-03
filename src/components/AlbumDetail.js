import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './ButtonImage';
import { Actions } from 'react-native-router-flux';

const AlbumDetail = ({ title, albumId, primaryPhoto, total, secret, farm, server}) => {
  const {
    headerContentStyle,
    headerTextStyle,
    bodyTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() => Actions.photoList({albumId:albumId})} imageUrl={`https://farm${farm}.staticflickr.com/${server}/${primaryPhoto}_${secret}.jpg`}>
        </Button>
      </CardSection>

      <CardSection>
        <View>
          <Text style={bodyTextStyle}>Total: {total} images</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 18
  },
  bodyTextStyle: {
    fontSize: 12
  },
  thumbnailStyle: {
    height: 50,
    width: 50
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
    width: null
  }
};

export default AlbumDetail;
