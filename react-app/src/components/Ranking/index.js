import React, { useContext } from 'react'
import BgRanking from '../../assets/BgRanking.png'
import { TempValueContextWrapper } from '../../contexts/TempValueContext'
import TableCard from '../../layout/Table'
import { RankingComponents, RankingDetails } from './RankingElements'

const Ranking = () => {
  const { temp1, temp2 } = useContext(TempValueContextWrapper)
  return (
    <RankingComponents>
      <h1>RANKING</h1>
      <RankingDetails>
        <img src={BgRanking} />
        <TableCard No="NO." Location="Location" Temperature="Temperature"></TableCard>

        {temp1 > temp2 ? (
          <>
            <TableCard No="1" Location="Artisan" Temperature={temp1 + '  °C'} />
            <TableCard No="2" Location="My Home" Temperature={temp2 + '  °C'} />
          </>
        ) : (
          <>
            <TableCard No="1" Location="My Home" Temperature={temp2 + '  °C'} />
            <TableCard No="2" Location="Artisan" Temperature={temp1 + '  °C'} />
          </>
        )}
      </RankingDetails>
    </RankingComponents>
  )
}

export default Ranking
