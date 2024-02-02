import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {inputtextwallpaper} from '../atoms/wallpaperinputtext';
import {useRecoilState} from 'recoil';
import Navbar from './Navbar';
import {useNavigation} from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const [searchvalue, setSearchValue] = useRecoilState(inputtextwallpaper);
  const [imagecollection, setImageCollection] = useState([]);
  const accesskey = 'QaC3puzPQbTAJsMzEQJFtmI0Mxk2Ovc7nykPaI3n31c';
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePaths = Array.from(
        {length: 50},
        (_, index) => `path/to/image${index + 1}.jpg`,
      );

      const promises = imagePaths.slice(0, 30).map(async path => {
        const imageRef = storage().ref(path);
        try {
          const url = await imageRef.getDownloadURL();
          return url;
        } catch (error) {
          console.error('Error getting download URL:', error);
          return null;
        }
      });

      const urls = await Promise.all(promises);
      setImageUrls(urls.filter(url => url !== null));
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const getWallpapers = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${searchvalue}&client_id=${accesskey}`,
      );
      let responseJson = await response.json();
      setImageCollection(responseJson.results);
    };
    getWallpapers();
  }, [searchvalue]);

  const ShowWallpaper = item => {
    navigation.navigate('View', {clickedimage: `${JSON.stringify(item)}`});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={imagecollection}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                ShowWallpaper(item);
              }}>
              <View style={styles.imagecontainer}>
                <Image style={styles.image} source={{uri: item.urls.regular}} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imagecontainer: {
    width: 200,
    height: 250,
    backgroundColor: 'white',
    margin: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Screen1;
