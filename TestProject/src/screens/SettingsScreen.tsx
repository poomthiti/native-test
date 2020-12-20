import React, { FC } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

interface Props {
  navigation?: any
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>
        Settings Screen
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default SettingsScreen;
