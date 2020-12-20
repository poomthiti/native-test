import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import colors from '../theme/colors'
import text from '../theme/text'

const urlArray = [
  require('../assets/images/slide0.jpg'),
  require('../assets/images/slide1.jpg'),
  require('../assets/images/slide2.jpg'),
  require('../assets/images/slide3.jpg'),
  require('../assets/images/slide4.jpg'),
  require('../assets/images/slide5.jpg'),
]

const NewsCard: FC = () => {
  return (
    <>
      {urlArray.map((url, index) => {
        return (
          <View key={`news-${index}`} style={styles.textbox}>
            <View style={styles.imageGrid}>
              <Image
                style={styles.image}
                source={url}
              >
              </Image>
            </View>
            <View style={styles.contentGrid}>
              <Text style={styles.newsHeader}>
                Lorem Ipsum
              </Text>
              <Text style={styles.newsSubtitle} numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci velit, blandit ac metus ut, venenatis hendrerit metus. Mauris efficitur lacinia leo, vitae pulvinar turpis vehicula at. Ut ac sem at orci egestas dapibus. Maecenas ut quam mattis, egestas augue id, dictum erat.
              </Text>
            </View>
          </View>
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  textbox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(187, 187, 187, 0.38)',
    shadowOpacity: 1,
    shadowRadius: 4,
    marginBottom: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  imageGrid: {
    flex: 0.3
  },
  contentGrid: {
    flex: 0.7,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  newsHeader: {
    ...(text.newsHeader),
    color: colors.black
  },
  newsSubtitle: {
    ...(text.subtitle),
    color: colors.muted
  }
})

export default NewsCard;