import React, { FC } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

interface Props {
  navigation?: any
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>
        Home You Know
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default HomeScreen;