import React, { FC, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Text
} from 'react-native'

import Appbar from '../component/Appbar'

import text from '../theme/text'
import colors from '../theme/colors'

import TicketCard from '../component/TicketCard'

interface Props {
  navigation?: any
}

const TicketScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar page='ticket' />
      <ScrollView style={styles.content}>
        <Text style={styles.header}>
          Your Predictions
        </Text>
        <TicketCard />
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
    marginTop: Platform.OS === 'ios' ? 95 : 65,
    flex: 1,
  },
  header: {
    ...(text.header),
    color: colors.black,
    marginVertical: 24,
    marginLeft: 24
  },
})

export default TicketScreen;
