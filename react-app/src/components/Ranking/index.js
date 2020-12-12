import React from 'react'
import TableCard from '../../layout/Table'
import { RankingComponents, RankingDetails } from './RankingElements'

const Ranking = () => {
  return (
    <RankingComponents>
      <h1>RANKING</h1>
      <RankingDetails>
        <TableCard No="NO." Location="Location" Temperature="Temperature"></TableCard>
      </RankingDetails>
    </RankingComponents>
  )
}

export default Ranking
