import React, { useEffect, FC, useState } from 'react'
import { useSetRecoilState, useRecoilState } from 'recoil'
import {
  Modal,
  Text,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

import colors from '../theme/colors'
import text from '../theme/text'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { predictionArrayState } from '../atom/prediction'

interface Props {
  modalVisible: boolean,
  closeModal: () => void,
  homeTeam?: string
  awayTeam?: string
}

const BetModal: FC<Props> = ({ modalVisible, closeModal, homeTeam, awayTeam }) => {
  const [homeScore, setHomeScore] = useState<string>('')
  const [awayScore, setAwayScore] = useState<string>('')
  const [predictionArray] = useRecoilState(predictionArrayState)
  const setPredictionState = useSetRecoilState(predictionArrayState)

  const disabled: boolean = !Number(homeScore) || !Number(awayScore)

  const onSubmit = (homeTeam: string, awayTeam: string, homeScore: string, awayScore: string) => () => {
    const predictionTicket = {
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      homeScore: homeScore,
      awayScore: awayScore
    }
    const newPredictionArray = [...predictionArray, predictionTicket]
    setPredictionState(newPredictionArray)
    closeModal()
  }

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.titleView}>
            <Text style={styles.header}>
              Prediction
            </Text>
            <TouchableOpacity activeOpacity={1} onPress={closeModal}>
              <FontAwesomeIcon icon={faTimes} size={24} color={colors.muted} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <Text style={{ ...styles.header, marginTop: 16 }}>
              Bet precisely, Win prize!
            </Text>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>

              <View style={{ ...styles.teamView, marginTop: 32, marginBottom: 12 }}>
                <Text style={styles.teamText}>
                  {homeTeam}
                </Text>
                <Text style={styles.teamText} >
                  {awayTeam}
                </Text>
              </View>
              <View style={{ ...styles.teamView, marginBottom: 40 }}>
                <TextInput
                  style={styles.input}
                  onChangeText={score => setHomeScore(score)}
                  value={homeScore}
                />
                <Text style={styles.colonSeparator}>
                  :
              </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={score => setAwayScore(score)}
                  value={awayScore}
                />
              </View>
              <Button
                onPress={onSubmit(homeTeam as string, awayTeam as string, homeScore, awayScore)}
                title="Submit"
                color={colors.primary}
                disabled={disabled}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    width: '85%',
    height: 340,
    backgroundColor: "white",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderStyle: 'solid',
    borderColor: colors.active,
    borderBottomWidth: 2
  },
  header: {
    ...(text.header),
    color: colors.black
  },
  teamView: {
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamText: {
    color: colors.black,
    ...(text.newsContent)
  },
  colonSeparator: {
    color: colors.black,
    fontWeight: '600',
    fontSize: 30
  },
  input: {
    height: 70,
    width: 70,
    borderRadius: 16,
    borderStyle: 'solid',
    borderColor: colors.active,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(187, 187, 187, 0.38)',
    shadowOpacity: 1,
    shadowRadius: 4,
    textAlign: 'center',
    ...(text.header),
  }
})

export default BetModal;