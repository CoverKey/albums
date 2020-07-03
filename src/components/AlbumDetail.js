import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumnailContainerStyle}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>
        <View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContainerStyle: {
    flexdirection: 'column',
    justifyContnet: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    wisdth: 50,
  },
  thumnailContainerStyle: {
    justifyContnet: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default AlbumDetail;
