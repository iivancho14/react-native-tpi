import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Loading from './Loading';

class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=42819205@N05&format=json&nojsoncallback=1`)
      .then(response => this.setState({ photoset: response.data.photosets.photoset }));
  }

  renderAlbums() {
    return this.state.photoset.map(album =>
      <AlbumDetail key={album.id} title={album.title._content} albumId={album.id} primaryPhoto={album.primary} secret={album.secret} server={album.server} farm={album.farm} total={album.photos}/>
    );
  }

  render() {
    console.log(this.state);

    if (!this.state.photoset) { 
			return (
          <Loading size="large" color="#0080ff"/>
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

export default AlbumList;
