import axios from "axios";
import { Alert } from 'react-native'

export const getFixtures = async (leagueID) => {
  const options = {
    method: 'GET',
    url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${leagueID}/next/10`,
    params: { timezone: 'Asia/Bangkok' },
    headers: {
      'x-rapidapi-key': '09d035c38emshfc1a0b8083b3f0dp1293aejsn986ffbaa2864',
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  };
  try {
    const { data } = await axios.request(options)
    const fixtures = data.api.fixtures
    return fixtures;
  } catch (error) {
    Alert.alert('Request Failed', `${error}`)
  }
}



