import React, { FC } from 'react';
import { useRecoilState } from 'recoil'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { predictionArrayState } from '../atom/prediction'

import colors from '../theme/colors'
import text from '../theme/text'

const NewsCard: FC = () => {
  const predictionArray = useRecoilState(predictionArrayState)

  return (
    <>
      {predictionArray[0].map((item, index) => {
        return (
          <View style={styles.ticketCard} key={`ticket-${index + 1}`}>
            <View style={styles.ticketGrid}>
              <View style={styles.colorTab} />
              <View style={styles.ticketText}>
                <Text style={text.dateText}>
                  Ticket
          </Text>
                <View style={styles.divider} />
                <Text style={text.dateText}>
                  {`#0${index + 1}`}
                </Text>
              </View>
            </View>
            <View style={styles.detailGrid}>
              <Text style={styles.teamName}>
                {item.homeTeam ?? 'No Data'}
              </Text>
              <Text style={styles.score}>
                {`${item.homeScore ?? '#'}-${item.awayScore ?? '#'}`}
              </Text>
              <Text style={styles.teamName}>
                {item.awayTeam ?? 'No Data'}
              </Text>
            </View>
            <View style={styles.editGrid}>
              <TouchableOpacity activeOpacity={0.75}>
                <Text style={styles.editText}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View >
        )
      })}
    </>
  )
}

const styles = StyleSheet.create({
  ticketCard: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
    borderRadius: 4,
    elevation: 4,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'rgba(187, 187, 187, 0.38)',
    shadowOpacity: 1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  ticketGrid: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  detailGrid: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editGrid: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorTab: {
    flex: 0.1,
    backgroundColor: colors.orange,
    height: '100%',
  },
  editText: {
    color: 'dodgerblue',
    textDecorationLine: 'underline'
  },
  ticketText: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamName: {
    ...(text.dateText),
    flex: 0.4,
    textAlign: 'center'
  },
  score: {
    ...(text.dateText),
    flex: 0.2,
    textAlign: 'center'
  },
  divider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.black,
    marginVertical: 8,
    width: 50
  }
})

export default NewsCard;