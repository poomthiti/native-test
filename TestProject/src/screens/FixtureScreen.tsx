import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

interface Props {
  navigation?: any
}

const FixtureScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>
        Fixture You Know
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default FixtureScreen;
