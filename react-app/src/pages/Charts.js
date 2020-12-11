import { Index, TimeSeries } from 'pondjs'
import React from 'react'
import {
  BarChart,
  ChartContainer,
  ChartRow,
  Charts,
  Resizable,
  styler,
  YAxis,
} from 'react-timeseries-charts'
import styled from 'styled-components'
import data from '../services/Data'

const Test = styled.div`
  margin-top: 200px;
`

class SimpleChart extends React.Component {
  render() {
    const series = new TimeSeries({
      name: 'hilo_rainfall',
      columns: ['index', 'precip'],
      points: data.values.map(([d, value]) => [Index.getIndexString('1h', new Date(d)), value]),
    })

    console.log('series is ', series)
    const style = styler([
      {
        key: 'precip',
        color: '#A5C8E1',
        selected: '#2CB1CF',
      },
    ])

    return (
      <Test>
        <Resizable>
          <ChartContainer timeRange={series.range()}>
            <ChartRow height="150">
              <YAxis
                id="rain"
                label="Rainfall (inches/hr)"
                min={0}
                max={2}
                format=".2f"
                width="70"
                type="linear"
              />
              <Charts>
                <BarChart
                  axis="rain"
                  style={style}
                  spacing={1}
                  columns={['precip']}
                  series={series}
                  minBarHeight={1}
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>
      </Test>
    )
  }
}

export default SimpleChart

// class App extends React.Component {
//   state = {};

//   render() {
//     return (
//       <div className="p-3 m-4 border border-muted">
//         <SimpleChart />
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));
