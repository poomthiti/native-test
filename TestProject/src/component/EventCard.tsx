import React, { FC, useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import BetModal from './BetModal'

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'


interface Props {
  date?: string,
  time?: string,
  homeTeam?: string,
  awayTeam?: string
}
const EventCard: FC<Props> = ({ date, time, homeTeam, awayTeam }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }
  return (
    <View style={styles.textbox}>
      <View style={styles.dateGrid}>
        <Text style={styles.dateText}>
          {date}
        </Text>
        <Text style={styles.dateText}>
          {time}
        </Text>
      </View>
      <View style={styles.contentGrid}>
        <Text style={styles.fixtureText}>
          {homeTeam}
        </Text>
        <Text style={styles.fixtureText}>
          {awayTeam}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.gadgetGrid}
        activeOpacity={0.8}
        onPress={handleOpenModal}
      >
        <FontAwesomeIcon icon={faCoins} color={colors.gadget} size={20} />
      </TouchableOpacity>
      <BetModal
        modalVisible={modalVisible}
        closeModal={handleCloseModal}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 70,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderColor: colors.border,
    borderStyle: "solid"
  },
  dateGrid: {
    flex: 0.25,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  contentGrid: {
    flex: 0.6,
    height: '70%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: colors.border,
    paddingLeft: 12
  },
  gadgetGrid: {
    flex: 0.15,
    alignItems: 'center'
  },
  fixtureText: {
    ...(text.fixtureText),
    color: colors.black,
    marginVertical: 3
  },
  dateText: {
    ...(text.dateText),
    color: colors.black,
    marginVertical: 3
  },
})

export default EventCard