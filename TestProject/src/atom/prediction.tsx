import { atom } from 'recoil'

export const predictionArrayState = atom<{
  homeTeam: string,
  awayTeam: string,
  homeScore: string,
  awayScore: string
}[]>({
  key: 'predictionArray',
  default: []
})