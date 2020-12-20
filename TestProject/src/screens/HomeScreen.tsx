import React, { FC } from 'react'
import {
  View,
  Text,
  ScrollView,
  Platform,
  StyleSheet
} from 'react-native'

import ImageCard from '../component/ImageCard'
import NewsCard from '../component/NewsCard'
import Appbar from '../component/Appbar'

import colors from '../theme/colors'
import text from '../theme/text'

interface Props {
  navigation?: any
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar page='home' />
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 16 }}>
        <ScrollView
          style={styles.imageSlide}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <ImageCard />
        </ScrollView>
        <Text style={styles.header}>
          What's Trending?
        </Text>
        <View
          style={styles.newsSlide}
        >
          <NewsCard />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
    marginTop: Platform.OS === 'ios' ? 95 : 65,
    flex: 1,
    marginRight: -40
  },
  imageSlide: {
    marginVertical: 32,
  },
  header: {
    ...(text.header),
    color: colors.black
  },
  newsSlide: {
    marginVertical: 16,
    marginRight: 32
  }
})


export default HomeScreen;
