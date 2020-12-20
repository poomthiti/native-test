import React, { FC } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFutbol } from '@fortawesome/free-regular-svg-icons'

interface Props {
  page: string
}

const pageMap: { [key: string]: any } = {
  'home': {
    header: 'News Feed'
  },
  'fixture': {
    header: 'Next Fixtures',
  },
  'settings': {
    header: 'Settings'
  },
  'ticket': {
    header: 'My Tickets'
  },
  'default': {
    header: 'KICK-OFF'
  }
}

const Appbar: FC<Props> = ({ page = 'default' }) => {
  return (
    <View style={styles.appbar}>
      <SafeAreaView style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text
          style={styles.logoText}
        >
          {pageMap[page as string].header}
        </Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: Platform.OS === 'ios' ? 95 : 65,
  },
  logoText: {
    ...(text.logo),
    color: colors.white,
  },
})

export default Appbar;

