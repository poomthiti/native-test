import React, { FC } from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

const urlArray = [
  require('../assets/images/slide0.jpg'),
  require('../assets/images/slide1.jpg'),
  require('../assets/images/slide2.jpg'),
  require('../assets/images/slide3.jpg'),
  require('../assets/images/slide4.jpg'),
  require('../assets/images/slide5.jpg'),
]

const ImageCard: FC = () => {
  return (
    <>
      {urlArray.map((url, index) => {
        return (
          <TouchableOpacity activeOpacity={0.7} key={`image-${index}`}>
            <Image
              style={styles.image}
              source={url}
            >
            </Image>
          </TouchableOpacity>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    height: Platform.OS === 'ios' ? 280 : 250,
    width: 370,
    borderRadius: 16,
    marginRight: 12,
  }
})

export default ImageCard;