import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import moment from 'moment';
import Comment from './Comment';

const CommentDetail = ({id, author, realname, datecreate, permalink, content}) => {
  const {
    thumbnailContainerStyle,
  } = styles;

  const dateCommentary = moment.unix(+datecreate, "x").format("DD-MM-YYYY hh:mm a");

  return (
    
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
            <Comment content={content}/>
            <Text> - by {realname} at {dateCommentary}</Text>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default CommentDetail;
