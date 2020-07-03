import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <View style={{flex: 1}}>
    <Header headerText={'ALBUMS'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
