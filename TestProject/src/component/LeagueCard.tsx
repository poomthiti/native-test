import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronDown, faChevronUp, faCoins } from '@fortawesome/free-solid-svg-icons'

import { formatDate } from '../utils/formatDate'

interface Props {
  fixtures?: any,
  country?: string,
  index?: number
}

const leagueMap: { [key: string]: any } = {
  England: {
    league: 'Premier League'
  },
  France: {
    league: 'Ligue 1'
  },
  Germany: {
    league: 'Bundesliga'
  },
  Italy: {
    league: 'Serie A'
  },
  Spain: {
    league: 'LaLiga'
  }
}

const LeagueCard: FC<Props> = ({ fixtures = [], country }) => {
  const [open, setOpen] = useState(false)

  const handleExpand = () => {
    setOpen(!open)
  }

  const splitEventDate = (eventDate: string) => {
    const [date, time] = eventDate.split('T')
    const formatTime = time.slice(0, 5)
    return { date, formatTime }
  }

  const leagueTitle = leagueMap[country as string].league

  const eventCards = fixtures?.map((event: { [key: string]: any }, index: number) => {
    const { event_date, homeTeam, awayTeam } = event
    const { date, formatTime } = splitEventDate(event_date as string)
    const newDateFormat = formatDate(date)
    return (
      <View style={styles.textbox} key={`${country}-${index}`}>
        <View style={styles.dateGrid}>
          <Text style={styles.dateText}>
            {newDateFormat}
          </Text>
          <Text style={styles.dateText}>
            {formatTime}
          </Text>
        </View>
        <View style={styles.contentGrid}>
          <Text style={styles.fixtureText}>
            {homeTeam["team_name"] ?? 'Home Team'}
          </Text>
          <Text style={styles.fixtureText}>
            {awayTeam["team_name"] ?? 'Away Team'}
          </Text>
        </View>
        <View style={styles.gadgetGrid}>
          <FontAwesomeIcon icon={faCoins} color={colors.gadget} size={20} />
        </View>
      </View>
    )
  }) || []

  return (
    <>
      <TouchableOpacity
        onPress={handleExpand}
        activeOpacity={0.8}
        style={styles.textbox}
      >
        <View style={styles.headerGrid}>
          <View style={styles.countryGrid}>
            <Text style={styles.countryHeader}>
              {leagueTitle}
            </Text>
          </View>
          <View
          >
            <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} color={colors.muted} />
          </View>
        </View>
      </TouchableOpacity>
      {open ?
        eventCards
        // <View style={styles.textbox}>
        //   <View style={styles.dateGrid}>
        //     <Text style={styles.dateText}>
        //       Date
        //     </Text>
        //     <Text style={styles.dateText}>
        //       Time
        //     </Text>
        //   </View>
        //   <View style={styles.contentGrid}>
        //     <Text style={styles.fixtureText}>
        //       Home Team
        //     </Text>
        //     <Text style={styles.fixtureText}>
        //       Away Team
        //     </Text>
        //   </View>
        //   <View style={styles.gadgetGrid}>
        //     <FontAwesomeIcon icon={faCoins} color={colors.gadget} size={20} />
        //   </View>
        // </View>
        :
        null}
    </>
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
  headerGrid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24
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
  countryHeader: {
    ...(text.header),
    color: colors.black,
    marginLeft: 32
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
  countryGrid: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default LeagueCard;