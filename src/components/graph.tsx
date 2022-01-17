import { FunctionalComponent } from 'preact'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface Props {
  populationData: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

export const Graph: FunctionalComponent<Props> = ({ populationData }) => {
  let series: Highcharts.SeriesOptionsType[] = []

  let categories = []

  for (let i = 0; i < populationData.length; i++) {
    let data = []
    const populationArray = populationData[i].data

    for (let i = 0; i < populationArray.length; i++) {
      const population = populationArray[i]

      // 出力したい年度のレンジを範囲指定
      if (1980 <= population.year && population.year <= 2020) {
        data.push(population.value)
        categories.push(String(population.year))
      }
    }
    series.push({
      type: 'line',
      name: populationData[i].prefName,
      data,
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
