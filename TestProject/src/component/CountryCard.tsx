import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import LeagueCard from './LeagueCard'

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
  fixtures?: any,
  country?: string,
  index?: number
}

const urlArray = [
  require('../assets/icons/england.png'),
  require('../assets/icons/france.png'),
  require('../assets/icons/germany.png'),
  require('../assets/icons/italy.png'),
  require('../assets/icons/spain.png'),
]

const MatchCard: FC<Props> = ({ fixtures, country, index }) => {
  const [open, setOpen] = useState(false)

  const handleExpand = () => {
    setOpen(!open)
  }

  return (
    <>
      <TouchableOpacity
        onPress={handleExpand}
        activeOpacity={0.8}
        style={styles.textbox}
      >
        <View style={styles.headerGrid}>
          <View style={styles.countryGrid}>
            <Image
              source={urlArray[index as number]}
              style={styles.countryIcon}
            />
            <Text style={styles.countryHeader}>
              {country}
            </Text>
          </View>
          <View
          >
            <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} color={colors.muted} />
          </View>
        </View>
      </TouchableOpacity>
      {open ?
        <LeagueCard fixtures={fixtures} country={country} />
        :
        null}
    </>
  )
}

const styles = StyleSheet.create({
  textbox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: colors.white,
    borderBottomWidth: 2,
    borderColor: '#E0E0E0',
    borderStyle: "solid"
  },
  headerGrid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  },
  contentGrid: {
    flex: 0.7,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  countryHeader: {
    ...(text.header),
    color: colors.black,
    marginLeft: 16
  },
  newsSubtitle: {
    ...(text.subtitle),
    color: colors.muted
  },
  countryIcon: {
    width: 28,
    height: 28
  },
  countryGrid: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default MatchCard;