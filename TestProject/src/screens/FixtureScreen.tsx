import React, { FC, useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native'

import Appbar from '../component/Appbar'
import CountryCard from '../component/CountryCard'

import { getFixtures } from '../api'

interface Props {
  navigation?: any
}

interface Fixtures {
  [key: string]: any
}

const country = ['England', 'France', 'Germany', 'Italy', 'Spain']
// league_id :      2790   , 2664    ,  2755   ,  2857  ,  2833

const FixtureScreen: FC<Props> = ({ navigation }) => {
  const [fixtures, setFixtures] = useState<Fixtures>({
    England: [],
    France: [],
    Germany: [],
    Italy: [],
    Spain: []
  })

  useEffect(() => {
    const getAllFixtures = async () => {
      const [
        englandFixtures,
        franceFixtures,
        germanyFixtures,
        italyFixtures,
        spainFixtures
      ] = await Promise.all([
        getFixtures(2790),
        getFixtures(2664),
        getFixtures(2755),
        getFixtures(2857),
        getFixtures(2833),
      ])
      const allFixtures = {
        England: englandFixtures,
        France: franceFixtures,
        Germany: germanyFixtures,
        Italy: italyFixtures,
        Spain: spainFixtures
      }
      setFixtures(allFixtures)
    }
    getAllFixtures()
  }, [getFixtures])

  return (
    <View style={styles.container}>
      <Appbar page='fixture' />
      <ScrollView style={styles.content}>
        {country.map((country, index) => {
          return (
            <CountryCard
              fixtures={fixtures[country]}
              country={country}
              key={country}
              index={index}
            />
          )
        })}
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
    marginTop: Platform.OS === 'ios' ? 95 : 65,
    flex: 1,
  },
})

export default FixtureScreen;
