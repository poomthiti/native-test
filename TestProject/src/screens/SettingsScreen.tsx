import React, { FC } from 'react'
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native'

import Appbar from '../component/Appbar'

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faAngleRight,
  faUserCog,
  faCog,
  faGlobe,
  faBell,
  faDollarSign,
  faHistory
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  navigation?: any
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar page="settings" />
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 24 }}>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faUserCog} size={21} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              My Profile
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faCog} size={20} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              System Settings
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faBell} size={20} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              Notification Settings
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faGlobe} size={20} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              Language
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faHistory} size={20} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              History
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsCard} activeOpacity={0.75}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.iconWrap}>
              <FontAwesomeIcon icon={faDollarSign} size={20} color={colors.white} />
            </View>
            <Text style={styles.settingsText}>
              Currency
          </Text>
          </View>
          <FontAwesomeIcon icon={faAngleRight} size={20} color={colors.active} />
        </TouchableOpacity>
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
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 95 : 65,
  },
  settingsCard: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 65,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderColor: colors.border,
    borderStyle: "solid",
    paddingHorizontal: 24
  },
  settingsText: {
    ...(text.newsContent),
    color: colors.black,
    marginLeft: 12
  },
  iconWrap: {
    borderRadius: 17,
    backgroundColor: colors.gadget,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default SettingsScreen;
