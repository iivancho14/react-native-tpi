import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import Loading from './Loading';

class PhotoList extends Component {
  state = { photos: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${this.props.albumId}&user_id=42819205@N05&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photos: response.data.photoset.photo }));
  }

  renderAlbums() {
    return this.state.photos.map(photo =>
      <PhotoDetail key={photo.title} title={photo.title} photoId={photo.id} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
    );
  }

  render() {
    console.log(this.state);


    if (!this.state.photos) { 
			return (
                <View style={{ flex: 1 }}>
					        <Loading size="large" color="#FE2E9A"/>
                </View>
				);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        </View>
    );
  }
}

export default PhotoList;
