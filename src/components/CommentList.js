import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import Loading from './Loading';
import CommentDetail from './CommentDetails';

class CommentList extends Component {
  state = { comments: null };

  componentWillMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photo_id=${this.props.photoId}&format=json&nojsoncallback=1`)
      .then(response => this.setState({ comments: response.data.comments.comment }));
  }

  renderComments() {
    return this.state.comments.map(commentary =>
      <CommentDetail key={commentary.id} author={commentary.author} datecreate = {commentary.datecreate} realname={commentary.realname} commentUrl={commentary.permalink} content={commentary._content}/>
    );
  }

  render() {
    console.log(this.state);


    if (!this.state.comments) { 
			return (
                <View style={{ flex: 1 }}>
					        <Loading size="large" color="#FE2E9A"/>
                </View>
				);
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {this.renderComments()}
            </ScrollView>
        </View>
    );
  }
}

export default CommentList;
