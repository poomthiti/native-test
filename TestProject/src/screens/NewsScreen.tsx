import React, { FC, useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  Text,
  ImageBackground
} from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

interface Props {
  route?: any
}

const urlArray = [
  require('../assets/images/slide0.jpg'),
  require('../assets/images/slide1.jpg'),
  require('../assets/images/slide2.jpg'),
  require('../assets/images/slide3.jpg'),
  require('../assets/images/slide4.jpg'),
  require('../assets/images/slide5.jpg'),
]

const background = require('../assets/images/newsbackground.jpg')

const NewsScreen: FC<Props> = ({ route }) => {
  const newsImage = urlArray[route.params.id]
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 24 }}>
          <Image
            source={newsImage}
            style={styles.image}
          />
          <Text style={styles.header}>
            Lorem Ipsum
          </Text>
          <Text style={styles.subtitle}>
            consectetur adipiscing elit
          </Text>
          <Text style={styles.newsContent} numberOfLines={9}>
            {'\t'}Lorem ipsum dolor sit amet, consect adipiscing elit. Mauris luctus lacinia nunc, sed mattis eros vulputate ut. Vestibulum rutrum orci sit amet arcu elementum, id facilisis dolor finibus. Donec justo leo, tempor non massa vitae, laoreet tristique sem. Nunc et felis vitae elit vulputate pulvinar. Fusce eros lorem, faucibus vel magna eu, auctor maximus ante. Mauris ultrices eget justo nec facilisis. Integer tincidunt, ex sit amet faucibus pharetra, magna leo molestie risus, eget sagittis neque tellus sed lacus. Nunc a convallis sem. Curabitur nulla arcu, viverra sed tellus sed, facilisis maximus enim. Nulla sed enim et urna commodo volutpat mattis in ipsum. In ornare ipsum massa, vitae ultrices sapien molestie quis. Maecenas elementum imperdiet felis, vel mollis quam pretium non. Nunc hendrerit sodales nunc sed imperdiet. Ut eu leo et ante rutrum accumsan eu id dolor. Donec dapibus gravida turpis id suscipit.
            Aenean dictum nulla nec bibendum auctor. Donec laoreet elit eget massa sagittis, at accumsan metus varius. Curabitur rhoncus, purus malesuada eleifend pretium, mi odio condimentum nisi, non convallis metus enim in libero. Maecenas pretium pharetra imperdiet. Fusce lorem risus, vehicula vitae tincidunt a, mattis ac purus. Donec sem lorem, vestibulum eu malesuada eu, consectetur euismod ante. Mauris et tortor blandit, fermentum augue sit amet, fringilla libero. Suspendisse potenti. Phasellus sollicitudin dictum lacus, at commodo eros malesuada sed. Aliquam erat volutpat. Vestibulum rhoncus porta nibh nec dictum. Nullam luctus lorem sit amet maximus facilisis. Aenean vel sapien malesuada, hendrerit risus sit amet, laoreet ante.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
    flex: 1,
  },
  image: {
    width: '100%',
    borderRadius: 16,
    height: 250,
    marginVertical: 32,
  },
  header: {
    ...(text.header),
    color: colors.white
  },
  subtitle: {
    ...(text.fixtureText),
    color: colors.white,
    marginTop: 2
  },
  newsContent: {
    ...(text.newsContent),
    color: colors.white,
    marginTop: 16
  },
})

export default NewsScreen;